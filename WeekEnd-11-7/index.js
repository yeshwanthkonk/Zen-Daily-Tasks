const {file_list, file_timestamp_creation} = require('./file_package/files_list')

const express = require('express')
const fs = require('fs')

const app = express()
app.listen(3000, ()=>{console.log("Server Started on port:3000")})

app.get('/', async (req, res)=>{
    let status = await file_timestamp_creation();
    console.log(status);
    if(status)
        res.send({"status": "success"});
    else
        res.send({"status": "Something went wrong"});
});

app.get('/list', async function(req, res){
    let status = await file_list();
    console.log(status);
    let data = "";
    try {
        status['dir'].forEach((dir)=>{
            data += `<div><i class='fas fa-folder'></i><span style="display: inline; color: blue;">${dir}</span></div>`;
        })
        status['file'].forEach((file)=>{
            data += `<div><i class="fa fa-file"></i>
            <span style="display: inline;">${file}</span></div>`;
        })
    } catch (error) {
        res.send({"status": `Error occured->${error}`});
    }
    data = 
    `<div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <ul style="list-style-type:none;">
            ${data}
        </ul>
    </div>`
    res.send(data);
})