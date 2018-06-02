var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');
//^this is where I'm gonna connect to mongolab

mongoose.Promise = Promise;

//so this is fancy -- it exports requires the todo model and exports it out at the same time.
//also, it's cool -- when this model is called, all that is required is ""./models". I guess that's cause
//index.js is looked at by default, and index.js exports models.
//Understanding this made me have the epiphany of "this is why it's called an INDEX!"
module.exports.Todo = require("./todo");

//use following command to kill mongo: "sudo service mongod stop"