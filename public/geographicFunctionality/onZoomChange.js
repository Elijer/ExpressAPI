var scale  = require('./common/scale');

var onZoomChange = function(googleMaps){
  map.addListener('zoom_changed', function(e) {
    var markerInstance;
    for (var i = 0; i < masterArray.length; i++ ) {
      markerInstance = masterArray[i];
      scale(googleMaps, markerInstance);
    }

    ///timer experiment
    var zoomInterval = setInterval(myTimer, 166.5);

    function myTimer() {
      console.log(Math.random(0, 1));
    }

    setTimeout(function(){
      clearInterval(zoomInterval);
    }, 333);

  });
}

module.exports = onZoomChange;
