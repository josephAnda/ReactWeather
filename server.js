//  The express dependency was installed using npm 

var express = require('express');

//  Create our app
var app = express();
//  the port is accessed this way on behalf of heroku 
var port = process.env.PORT || 3000;

//  app.use() tells what folder we want to serve
//  express.static() gives the folder name that we want to expose
app.use(express.static('public')); 

//  app.listen() starts the server
app.listen(port, function() {
	console.log('Express server is up on port' + port);
});