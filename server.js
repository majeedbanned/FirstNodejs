const express = require('express');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');

const app = express();
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
// app.use((req,

// 	res,
// 	(next) => {
// 		let now = new Date.getFullYear();
// 		let log = `${now} : ${req.method} ${req.url}`;
// 		fs.appendFile('server.log', log + '\n', (err) => {
// 			console.log('io err');
// 		});
// 	})
// );

hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper('date', () => {
	return new Date().getFullYear().toString();
});

app.get('/', function(req, res) {
	// res.send('Hello World1 <br/> hi majid');
	res.render('home', {
		pagetitle: 'index page',
		content: ' salam azizan'
	});
});
var r='salam';
app.listen(3000);
