
module.exports = function (mongoose) {

	var score = new mongoose.Schema({
	  date: { type: Date, default: Date.now },
	  value: { type: Number, min: 0 },
	  locale: { type: String },
	  player: { type: String },
	  game: { type: String, trim: true}
	});

	return mongoose.model('scores', score);
};
