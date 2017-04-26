var express     =   require("express");
var app         =   express();
var setupController = require('./controllers/setupController');
//var usersController = require('./controllers/usersController');
mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoDb');
var bodyParser = require('body-parser');

port = process.env.PORT || 300;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
})
// set routes
app.use(require('./routes/route'));





app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
