var mongoose = require('mongoose');
var Global = require('../datasets/global');
var Predefined = require('../datasets/predefined');

module.exports.add = function(req, res){
	var global = new Global(req.body);
	global.save();
	res.json(req.body);
}

module.exports.list = function(req, res){
	Global.find({ userId : req.param('user_id')}, function (err, result) {
       res.json(result);
    });
}
module.exports.item = function(req, res){
	Global.find({ _id : req.param('id')}, function (err, result) {
       res.json(result);
    });
}
module.exports.addPredefined = function(req, res){
	Predefined.find({ _id : req.param('id')}, function(err, result){
		var obj = {
			'userId' : req.param('userId'),
			'name' : result[0].name,
			'description': result[0].description,
			'img': result[0].img,
			'pId': result[0]._id
		}
		console.log(obj)
		var global = new Global(obj);
		global.save();
		res.json(req.body);
	});
}