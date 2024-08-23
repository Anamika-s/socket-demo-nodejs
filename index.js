import express from "express";

const app = express();
import path from "path";
import http  from 'http';

import {Server} from 'socket.io';

const server = http.createServer(app);
const io = new Server(server);

// import { ConnectionPoolMonitoringEvent } from "mongodb";

io.on('connection', (socket)=>
{
socket.on('chat message', (msg)=>
    {  console.log(msg)
   io.emit('chat message',msg);
    
// console.log("a user has connected")
socket.on('disconnect',()=>
{
    console.log("user has disonncted")
})
});
});

app.get("/", (req,res)=>
{
    console.log(("home page"))

    res.sendFile(path.resolve("index.html"))
})

server.listen(3000, (req, res)=>
{
console.log("server started")
})




