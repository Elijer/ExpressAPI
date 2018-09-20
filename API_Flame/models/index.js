var mongoose = require('mongoose');
mongoose.set('debug', true);
//mongoose.connect('mongodb://localhost/todo-api');

//lights_1
//mongoose.connect('mongodb://elijahrk:test11@ds157742.mlab.com:57742/lights_1');

//lights_2
mongoose.connect('mongodb://Elijahrk:voodoo8@ds259802.mlab.com:59802/lights_2');


//mongodb://<dbuser>:<dbpassword>@ds157742.mlab.com:57742/lights_1
//^this is where I'm gonna connect to mongolab

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

//use following command to kill mongo: "sudo service mongod stop"
