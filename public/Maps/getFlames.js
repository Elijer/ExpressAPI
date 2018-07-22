var $ = require('jquery');
var newMarker = require('./newMarker');
doSetTimeout = function(googleMaps, lat, lng, targetMap, id, masterArray, i) {
  setTimeout(function() {
    newMarker(googleMaps, lat, lng, targetMap, id, masterArray, i);
  }, i*100);
};

var getFlames = function(googleMaps, targetMap, masterArray){
  var zoomLvl = targetMap.zoom;
   $.getJSON('api/flames')
   .then(function(data){
     for (var i = 0; i < data.length; i++){
       var current = data[i],
       lat = current.lat,
       lng = current.lng,
       id = current._id;
       //console.log(i);
       doSetTimeout(googleMaps, lat, lng, targetMap, id, masterArray, i);

       //timeoutFunction(console.log(i), i*100);
         //newMarker(googleMaps, lat, lng, targetMap, id, masterArray, i)
     };
   });
};

module.exports = getFlames;
