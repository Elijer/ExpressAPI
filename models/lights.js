var mongoose = require('mongoose');

//define schema
var lightsSchema = new mongoose.Schema({
    intensity: {
        type: Number,
        default: 0
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    
});

//compiles this into a model and saves to variable\
var Lights = mongoose.model('Lights', lightsSchema);

//sends out the Todo
module.exports = Lights;


// name
// completed
// created_date