var mongoose = require('mongoose');

//define schema
var tenSchema = new mongoose.Schema({
    value: {
      type: Number,
      required: 'Value must be a number!'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

//compiles this into a model and saves to variable\
var ten = mongoose.model('ten', tenSchema);

//sends out the Todo
module.exports = ten;


// name
// completed
// created_date
