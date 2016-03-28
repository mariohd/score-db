var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var scores = require('./controllers/scoreController.js')(express);

app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/assets'));

app.use( '/scores', scores);

app.use(function (err, req, res, next) {
	res.writeHead(500, {"Content-type" : "text/plain" } );
	res.end(err.message);
});

var server = app.listen(process.env.PORT || 5000);
