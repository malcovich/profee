var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var conatactController = require('./server/controllers/contact-controller');
var globalController = require('./server/controllers/global-controller');
var predefinedController = require('./server/controllers/predefined-controller');
var taskController = require('./server/controllers/task-controller');

mongoose.connect('mongodb://localhost:27017/profee');
app.use(bodyParser.json());
app.use(multipartMiddleware)
app.use('/app', express.static( __dirname + "/app"));
app.use('/node_modules', express.static( __dirname + "/node_modules"));
app.use('/uploads', express.static( __dirname + "/uploads"));

app.get('/', function(req, res){
	res.sendfile('index.html');
});

//Auther

app.post('/api/user/signup', authenticationController.signup)
app.post('/api/user/login', authenticationController.login)

app.post('/api/contact/add', conatactController.add);

app.post('/api/global/add', globalController.add);
app.post('/api/global/addPredefined', globalController.addPredefined);
app.get('/api/global/list', globalController.list);
app.get('/api/global', globalController.item);

app.post('/api/task/add', taskController.add);
app.get('/api/task/list', taskController.list);
app.put('/api/task/changeStatus', taskController.changeStatus);

app.post('/api/predefined/addPhoto', multipartMiddleware, predefinedController.addPhoto);
app.post('/api/predefined/add', predefinedController.add);

app.get('/api/predefined/list', predefinedController.getList);

app.listen('3000', function(){
	console.log("Port")
});