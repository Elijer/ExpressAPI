var $ = require('jquery');
var newMarker = require('./newMarker');

var getFlames = function(googleMaps, targetMap){
     $.getJSON('api/flames')
     .then(function(data){
         window.localStorage.setItem('flames', JSON.stringify(data));
         //var someData = JSON.parse(window.localStorage.getItem('flames'));
         //console.log(someData);
         data.forEach(function(e){
             newMarker(googleMaps, e.lat, e.lng, targetMap, 1);
         });
     });
    
};

module.exports = getFlames;