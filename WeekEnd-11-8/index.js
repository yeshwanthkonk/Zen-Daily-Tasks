const express = require("express");
const app = express();
let port = process.env.PORT | 3000;

app.listen(port, ()=>console.log(`Server Started at Port-${port}`))
app.use(express.json())

seven_days_milliseconds =  604800000
booked_rooms = [];
rooms = [];
room_id = 0;
booking_id = 0
room_status = {'available':"Available", "under_process":"Under Process", "booked":"Booking Confirmed", "payment_pending":"Payment Pending", "booking_ended":"This Booking order has Ended"}
invalid_date = "Invalid Date"
customer_stack = []

app.post('/create_room',(req, res)=>{
    let room = req.body['room'];
    if(!room || !room['seats'] || !room['amenties'] || !room['price_per_hr'])
        return res.status(400).json({
            "detail":"Invalid data format send"
        })
    room['id'] = ++room_id;
    if(!room['status'])
        room['status']=room_status['available']
    rooms.push(room);
    res.status(200).json({"detail":`Room successfully created with Room_id-${room_id}`});
})

app.post("/room_booking", (req, res)=>{
    let booking_details=req.body['details'];
    if(!booking_details || !booking_details['customer_name'] || !booking_details['st_time'] || !booking_details['ed_time'] || !booking_details['room_id'])
        return res.status(400).json({"detail":"Invalid data format send"})

    let room = rooms.find((room)=>{return room["id"]==booking_details['room_id']})
    if(!room)
        return res.status(400).json({"detail":"Given Room Number not Exists"});

    let st_time = new Date(booking_details['st_time']);
    let ed_time = new Date(booking_details['ed_time']);

    if(st_time < new Date() || st_time>=ed_time){
        return res.status(400).json({"detail": "Inconsistence Start and End dates"})
    }

    if(new Date().getTime()+(seven_days_milliseconds) < ed_time.getTime())
        return res.status(400).json({"detail": "You are not allowed book outside next 7 days."})


    let customer = customer_stack.find((customer)=>{return customer['name'] == booking_details['customer_name']})
    if(customer){
        if((new Date().getTime() - customer['last_booked'].getTime())/60000<10)
            return  res.status(400).json({'detail': "Your are not authorized to make new booking with in 10 minutes from Old one was made"})
    }

    if(st_time == invalid_date || ed_time == invalid_date)
        return res.status(400).json({"detail": "Invalid Start Date or End Date Sent"})

    if(room['status']!=room_status['available']){
        if(room['status']!=room_status['booked']){
            return res.status(200).json({"detail":`Unable to Process due room status under-${room['status']}`})
        }
        else{
            if(new Date().getTime()>=room['ed_time'].getTime()){
                reset_room(room)
            }
            else{
                return res.status(400).json({"detail":`Unable to Process due room status under-${room['status']}`})
            }
        }
    }
    room['status']=room_status['booked']
    room['ed_time']=ed_time
    room['booking_id']=++booking_id;
    let booked_room = {}
    booked_room['id'] = room['booking_id']
    booked_room['room_id'] = room['id']
    booked_room['status'] = room['status']
    booked_room['customer_name']=booking_details['customer_name']
    booked_room['date']=new Date()
    booked_room['st_time']=st_time
    booked_room['ed_time']=ed_time
    booked_room['price_paid']=`${room['price_per_hr'].split(" ")[0]*((ed_time - st_time)/(1000*60*60))}`
    booked_rooms.push(booked_room)
    if(customer)
        customer['last_booked'] = booked_room['date']
    else
        customer_stack.push({'name':booked_room['customer_name'], 'last_booked':booked_room['date']})
    res.status(200).json({"detail": `Room Sucessfully Booked with price-${booked_room['price_paid']}`});
})

function reset_room(room){
    booked_room = booked_rooms.find((instance)=>{return instance['id']==room['booking_id']})
    booked_room['status'] = room_status['booking_ended']
    room['status'] = room_status['available']
}



app.get("/list_all_rooms_booked", (req, res)=>{
    let booked_date = req.body['booked_date']
    if(!booked_date)
        return res.status(400).json({"detail":"Booking Date required to extract list"});
    
    booked_date = new Date(booked_date);
    booked_date = `${booked_date.getDate()}${booked_date.getMonth()}${booked_date.getFullYear()}`
    booked_rooms_ondate = booked_rooms.filter((instance)=>{
        if(booked_date == `${instance['date'].getDate()}${instance['date'].getMonth()}${instance['date'].getFullYear()}`)
            return true;
    })
    res.status(200).json(booked_rooms_ondate)
})



app.get("/list_all_customers_booked", (req, res)=>{
    let booked_date = req.body['booked_date']
    if(!booked_date)
        return res.status(400).json({"detail":"Booking Date required to extract list"});
    
    booked_date = new Date(booked_date);
    booked_date = `${booked_date.getDate()}${booked_date.getMonth()}${booked_date.getFullYear()}`

    let customers = []

    for(let index=0;index<booked_rooms.length;index++){
        let instance = booked_rooms[index];
        if(instance['status']== room_status['booked'] && booked_date == `${instance['date'].getDate()}${instance['date'].getMonth()}${instance['date'].getFullYear()}`)
            customers.push({'customer_name':instance['customer_name'], "room_id":instance['room_id'], "date":instance['date'], "st_time":instance['st_time'], "ed_time":instance['ed_time']})
    }

    res.status(200).json(customers)
})