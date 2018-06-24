var express = require('express');
var app = express();
var http = require('http');
var port = process.env.PORT || 8000;

// app.set('view engine','ejs');
// // app.set('view',(__dirname));
// app.engine('html',require('ejs').renderFile);
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});
var server = http.createServer(app);
server.listen(port);