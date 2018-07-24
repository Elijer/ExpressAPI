var scalingHandler  = require('./scalingHandler');

var onZoomChange = function(googleMaps){
  map.addListener('zoom_changed', function(e) {
    var markerInstance;
    for (var i = 0; i < masterArray.length; i++ ) {
      markerInstance = masterArray[i];
      scalingHandler(googleMaps, markerInstance);
    }
  });
}

module.exports = onZoomChange;
