var mongoose = require('mongoose');
var Task = require('../datasets/task');

module.exports.add = function(req, res){
	var task = new Task(req.body);
	task.status = 1;
	task.save();
	res.json(req.body);
}

module.exports.list = function(req, res){
	Task.find({$and: [{ userId : req.param('user_id')},{type: req.param('type')}]}, function (err, result) {
       res.json(result);
    });
}