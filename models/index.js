var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');
//^this is where I'm gonna connect to mongolab

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

//use following command to kill mongo: "sudo service mongod stop"