var mongoose = require('mongoose');
var Predefined = require('../datasets/predefined');
var fs = require('fs');
var path = require('path');


module.exports.addPhoto = function(req, res){
    var file = req.files.file;

    var tempPath = file.path;
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    var newName =  guid() + file.name;

    var target_path = 'app/uploads/' + newName;
    // move the file from the temporary location to the intended location
    fs.rename(tempPath, target_path, function(err) {
        if (err) throw err;
        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
        fs.unlink(tempPath, function() {
            if (err) throw err;
            res.json({img:newName});
        });
    });
}

module.exports.add = function(req, res){
    var predefined = new Predefined(req.body);
	predefined.save();
	res.json(req.body);
}

module.exports.getList = function(req, res){
    Predefined.find(function (err, result) {
       res.json(result);
    });
}
