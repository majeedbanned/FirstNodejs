const { logger, summ } = require('./logger');
const fs = require('fs');
const os= require('os');
fs.writeFile('file.text', 'hi majid', (err) => {
	if (err) {
		console.log('err');
	} else {
		console.log('ok');
	}
});

console.log(os.cpus());
//logger('hi babe');
//summ(5);
