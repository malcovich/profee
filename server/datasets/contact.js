var mongoose = require('mongoose');
module.exports = mongoose.model('Contact', {
	name: String,
	spec: String,
	place: String,
	raiting: String,
	description: String,
	userId: String
}); 