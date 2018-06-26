var $ = require('jquery');
var newMarker = require('./newMarker');

var getFlames = function(googleMaps, targetMap){
     $.getJSON('api/flames')
     .then(function(data){
         console.log(data);
         data.forEach(function(e){
             newMarker(googleMaps, e.lat, e.lng, targetMap);
         });
     });
};

module.exports = getFlames;