mapConfig           = require ('./mapConfig');

var newMap = function(googleMaps){
  var map = new googleMaps.Map(document.getElementById('map'), mapConfig);
  map.oldZoom = map.getZoom();
  return map;
};

module.exports = newMap;
