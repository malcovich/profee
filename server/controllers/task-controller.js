var mongoose = require('mongoose');
var Task = require('../datasets/task');

module.exports.add = function(req, res){
	var task = new Task(req.body);
	task.status = 1;
	task.save();
	res.json(req.body);
}

module.exports.list = function(req, res){
	Task.find({$and: [{ userId : req.param('user_id')},{type: req.param('type')}, { status: { $ne: 0 }}]}, function (err, result) {
       res.json(result);
    });
}

module.exports.changeStatus = function(req,res){
	Task.findById(req.param('id'), function(err, doc){
		 if (err) {
			res.status(500).send(err);
		} else {
			doc.status = req.param('status');
			doc.save(function(err, updatedObj){
				if (err) {
                res.status(500).send(err)
				}
				res.send(updatedObj);
			})
		};
	});
}