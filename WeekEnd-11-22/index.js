const express = require("express")
const mongodb = require("mongodb")
const randomstring = require("randomstring");
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
const mongoClient = mongodb.MongoClient;
const object_id = mongodb.ObjectID;
const mongodb_url = "mongodb://127.0.0.1:27017/";


var {transporter, mail_detail, email_template} = require("./mail_module/send_reset_mail")

app.use(express.json());

app.post("/create_user", async (req, res)=>{
    let data = req.body;
    if(Object.keys(data).length == 0)
        return res.status(400).json({"detail": "Invalid Body Request"})
    try {
        let client  = await mongoClient.connect(mongodb_url);
        let collection = client.db("guvi_DailyTask(DT)_11-21-2020").collection('email_users');
        let result = await collection.find({"email": data["email"]}).toArray();
        console.log(result);
        if(result.length != 0){
            return res.status(400).json({"detail": "User Already Exist"})
        }
        let response = await collection.insertOne(data);
        client.close();
        if(response['insertedCount'] == 1)
            return res.status(200).json({"detail":`record inserted`, "id":response["ops"][0]["_id"]})
        else
            return res.status(500).json({"detail": "Some Error Occured"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({"detail": "Some Exception Occured"})
    }
})

app.get("/check_email", async (req, res)=>{
    let data = req.body;
    if(Object.keys(data).length == 0)
        return res.status(400).json({"detail": "Invalid Body Request"})
    let client  = await mongoClient.connect(mongodb_url);
    let collection = client.db("guvi_DailyTask(DT)_11-21-2020").collection('email_users');
    let result = await collection.find(data).toArray();
    client.close();
    res.status(200).json({result})
})

app.post("/generate_link", async (req, res)=>{
    let data = req.body;
    if(Object.keys(data).length == 0)
        return res.status(400).json({"detail": "Invalid Body Request"})
    try{
        let client  = await mongoClient.connect(mongodb_url);
        let collection = client.db("guvi_DailyTask(DT)_11-21-2020").collection('email_password_links');
        let random_string = randomstring.generate(64);
        let response = await collection.findOneAndUpdate({"email": data["email"]},{$set:{"random_id": random_string}});
        mail_detail['to'] = "yeshwanthkonka@yahoo.com"
        mail_detail['html'] = email_template(random_string)
        if(!response['lastErrorObject']['updatedExisting']){
            data['random_id'] = random_string
            response = await collection.insertOne(data);
            if(response['insertedCount'] == 1){
                await transporter.sendMail(mail_detail);
                return res.status(200).json({"detail":"New Email link Sent"})
            }
            throw "Server Error";
        }
        client.close();
        await transporter.sendMail(mail_detail);
        return res.status(200).json({"detail":"Updated Email link Sent"})
    }
    catch(error){
        console.log(error);
        return res.status(500).json({"detail": "Some Error Occured"})
    }
})

app.get("/link_validity", async (req, res)=>{
    let data = req.body;
    if(Object.keys(data).length == 0)
        return res.status(400).json({"detail": "Invalid Body Request"})
    let client  = await mongoClient.connect(mongodb_url);
    let collection = client.db("guvi_DailyTask(DT)_11-21-2020").collection('email_password_links');
    let result = await collection.find().toArray();
    client.close();
    res.status(400).json({result})
})

app.listen(port, ()=>console.log("Server Started on Port "+port));