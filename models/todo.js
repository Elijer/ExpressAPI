var mongoose = require('mongoose');

//define schema
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

//compiles this into a model and saves to variable\
var Todo = mongoose.model('Todo', todoSchema);

//sends out the Todo model
module.exports = Todo;


// name
// completed
// created_date