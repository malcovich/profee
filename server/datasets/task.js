var mongoose = require('mongoose');
module.exports = mongoose.model('Task', {
	name: String,
	description: String,
	userId: String,
	type: String,
	status: Number
}); 