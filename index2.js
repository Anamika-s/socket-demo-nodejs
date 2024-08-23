import event from "events";
// import { EventEmitter } from "stream";
import express from "express";
// import { ConnectionPoolMonitoringEvent } from "mongodb";


var EventEmitter = new event(EventEmitter);
var app = new express();

let count = 0;

EventEmitter.on('click', ()=>
{
    count++;
    console.log("count is " + count);
})


app.get("/", (req,res)=>
{
res.send("event has been fired");
EventEmitter.emit('click');
})



app.listen(3000, (req,res)=>{
    console.log("server started")
})












