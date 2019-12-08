//const EventEmitter = require('events');
const _Class = require('./eventslogger');

let _class=new _Class();

_class.on('emitfromemiter',(eventarg)=>{

    console.log(eventarg.msg);
});
_class.log('call from main');
//logger.emit('message',{msg:'hi majid1'});rs