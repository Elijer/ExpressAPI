var $ = require('jquery');
var newMarker = require('./newMarker');

var getFlames = function(googleMaps, map){
  var zoomLvl = map.zoom;
   $.getJSON('api/flames')
   .then(function(data){
     console.log(data);
     for (var i = 0; i < data.length; i++){
         var current = data[i],
         lat = current.lat,
         lng = current.lng,
         id = current._id;
        newMarker(googleMaps, lat, lng, map, id, i);
     };
   });
};

module.exports = getFlames;
