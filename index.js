/*
var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {"Content-type" : "text/plain" } );
	response.end("Hello World\n");
}).listen(process.env.PORT);
*/ 
var express = require('express');
var app = express();

app.get('/fetch', function (req, response) {
	response.writeHead(200, {"Content-type" : "text/plain" } );
	response.end("fetch success!");
});

app.get('/', function (req, response) {
	response.writeHead(200, {"Content-type" : "text/plain" } );
	response.end("/ success!");
});

var server = app.listen(process.env.PORT);
