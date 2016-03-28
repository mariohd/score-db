module.exports = function (express) {
	var router = express.Router();
	var scoreModel = require('../db.schema.js').models.score;
	var query = {};
	var score = {};

	router.get('', function (req, res) {
		res.redirect('/scores/all');
	});

	router.use('/register', function (req, res, next) {
		score = {};
		var parsedParameters = params(req);
		score.game = parsedParameters.game;
		score.player = parsedParameters.player;
		score.value = parsedParameters.value;
		score.locale = parsedParameters.locale;
		score.date = Date.now();
		next();
	});

	router.get('/all', function (req, res) {
		scoreModel.find({})
					.sort({ value : -1 })
					.select({ game: 1, player: 1, locale: 1, value: 1, date: 1 })
					.then(function (data) {
						res.writeHead(200, {"Content-type" : "application/json" } );
						res.end(JSON.stringify(data));
					});
	});

	router.post('/register', function (req, res) {
		var newScore = new scoreModel(score);
		newScore.save(function () {
			res.writeHead(200, {"Content-type" : "application/json" } );
			res.end(JSON.stringify(newScore));
		});
	});

	router.get('/:game', function (req, res) {
		scoreModel.find({game: req.params.game })
					.sort({ value : -1 })
					.select({ game: 1, player: 1, locale: 1, value: 1, date: 1 })
					.then(function (data) {
						res.writeHead(200, {"Content-type" : "application/json" } );
						res.end(JSON.stringify(data));
					});
	});

	function params(req) {
		return req.method === "POST" ? req.body : req.query;
	}

	return router;
}