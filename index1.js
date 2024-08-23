import event from 'events';
// import { EventEmitter } from 'stream';

var EventEmitter = new event(EventEmitter);

EventEmitter.on('call', (name)=>{
    console.log("event has been fired by " + name);
});

EventEmitter.emit('call', "Ajay");




