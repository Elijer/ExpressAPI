var mongoose = require('mongoose');

//define schema
var flameSchema = new mongoose.Schema({
    lat: {
        type: Number,
        required: 'Lat cannot be blank!'
    },
    lng: {
        type: Number,
        required: 'Lng cannot be blank!'
    },
    intensity: {
        type: Number,
        default: 0
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

//compiles this into a model and saves to variable\
var Flame = mongoose.model('Flame', flameSchema);

//sends out the Todo
module.exports = Flame;