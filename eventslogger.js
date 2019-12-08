const EventEmitter = require('events');

class Loggerclass extends EventEmitter {
	log(msg) {
		//console.log(msg);
		this.emit('emitfromemiter', { msg: 'hi' });
	}
}

module.exports =Loggerclass;
