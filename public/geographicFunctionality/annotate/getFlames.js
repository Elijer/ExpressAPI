var $                   = require('jquery');
var newMarker           = require('./newMarker');

var doSetTimeout = function(googleMaps, lat, lng, map, id, masterArray, i) {
  setTimeout(function() {
    newMarker(googleMaps, lat, lng, map, id, masterArray, i);
  }, i*20);
};

var getFlames = function(googleMaps, map, array){
   $.getJSON('api/flames')
   .then(function(data){
     for (var i = 0; i < data.length; i++){
       var current = data[i],
       lat = current.lat,
       lng = current.lng,
       id = current._id;
       doSetTimeout(googleMaps, lat, lng, map, id, masterArray, i);
     };
   });
};

module.exports = getFlames;
