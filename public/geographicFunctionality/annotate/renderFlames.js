var newMarker           = require('./newMarker');

/*var doSetTimeout = function(googleMaps, lat, lng, map, id, masterArray, i) {
  setTimeout(function() {
    newMarker(googleMaps, lat, lng, map, id, masterArray, i);
  }, i*20);
};*/

var renderFlames = function(googleMaps, data){
  for (var i = 0; i < data.length; i++){
    var flame = data[i];
    //console.log(flame.id);
    newMarker(googleMaps, flame.lat, flame.lng, map, flame._id, masterArray, i);
    //doSetTimeout(googleMaps, lat, lng, map, id, masterArray, i);
  };
};

module.exports = renderFlames;
