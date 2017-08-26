//  The express dependency was installed using npm

var express = require('express');

//  Create our app
var app = express();
<<<<<<< HEAD
//  the port is accessed this way on behalf of heroku 
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});
=======
const PORT = process.env.PORT || 3000;
>>>>>>> older-state
//  app.use() tells what folder we want to serve
//  express.static() gives the folder name that we want to expose
app.use(function(req, res, next ) {
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));

//  app.listen() starts the server
app.listen(PORT, function() {
<<<<<<< HEAD
	console.log('Express server is up on port' + PORT);
});
=======
	console.log('Express server is up on port ' + PORT);
});
>>>>>>> older-state
