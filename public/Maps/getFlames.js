var $ = require('jquery');
var newMarker = require('./newMarker');

var getFlames = function(googleMaps, targetMap, masterArray){
  var zoomLvl = targetMap.zoom;
  console.log("tryna something");
   $.getJSON('api/flames')
   .then(function(data){
     for (var i = 0; i < data.length; i++){
       var current = data[i],
       lat = current.lat,
       lng = current.lng,
       id = current._id;
       newMarker(googleMaps, lat, lng, targetMap, zoomLvl, id, masterArray, i);
     };
   });
};

module.exports = getFlames;
