var newMarker           = require('./newMarker');

/*var doSetTimeout = function(googleMaps, lat, lng, map, id, masterArray, i) {
  setTimeout(function() {
    newMarker(googleMaps, lat, lng, map, id, masterArray, i);
  }, i*20);
};*/


var renderFlames = function(googleMaps, data){
  //console.log(data);
  for (var i = 0; i < data.length; i++){
    var current = data[i],
    lat = current.lat,
    lng = current.lng,
    id = current._id;
    newMarker(googleMaps, lat, lng, map, id, masterArray, i);
    //doSetTimeout(googleMaps, lat, lng, map, id, masterArray, i);
  };
};

module.exports = renderFlames;
