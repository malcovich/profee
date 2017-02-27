var mongoose = require('mongoose');
var Contact = require('../datasets/contact');
module.exports.add = function(req, res){
	var contact = new Contact(req.body);
	console.log(contact)
	contact.save();
	res.json(req.body);
}

module.exports.login = function(req,res){
	User.find(req.body,function(err,results){
		if (err){
			console.log(err);
		}; 
		if (results && results.length === 1) {
			res.json(results[0])
		}
	})
}
