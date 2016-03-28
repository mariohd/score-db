var mongoose = require ("mongoose");

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 
    "mongodb://localhost/node-db";

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  }
});

exports.models = {
	score: require('./models/score.js')(mongoose),
};
