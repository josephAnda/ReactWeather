//  The express dependency was installed using npm 

var express = require('express');

//  Create our app
var app = express();

//  app.use() tells what folder we want to serve
//  express.static() gives the folder name that we want to expose
app.use(express.static('public')); 

//  app.listen() starts the server
app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});