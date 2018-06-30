var $ = require('jquery');
var newMarker = require('./newMarker');

var getFlames = function(googleMaps, targetMap){
    console.log("tryna something");
     $.getJSON('api/flames')
     .then(function(data){
       //console.log(data)
       //console.log(data[0]);
       //console.log(data.length);
       for (var i = 0; i < data.length; i++){
         console.log(data[i]);
       };
         /*data.forEach(function(e){
           console.log(e);
             //newMarker(googleMaps, e.lat, e.lng, targetMap, 1);
         });*/
     });

};

module.exports = getFlames;
