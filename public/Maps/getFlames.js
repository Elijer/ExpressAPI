var $ = require('jquery');
var newMarker = require('./newMarker');

var getFlames = function(googleMaps, targetMap, masterArray){
    var zoomLvl = targetMap.zoom;
    console.log("tryna something");
     $.getJSON('api/flames')
     .then(function(data){
       //console.log(data)
       //console.log(data[0]);
       //console.log(data.length);
       for (var i = 0; i < data.length; i++){
         var current = data[i];
         //console.log(data[i]);
         newMarker(googleMaps, current.lat, current.lng, targetMap, zoomLvl, current._id, masterArray, i);
       };
     });

};

module.exports = getFlames;
