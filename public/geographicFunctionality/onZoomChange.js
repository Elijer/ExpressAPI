var scale  = require('./common/scale');
var scaleAnimator  = require('./common/scaleAnimator');


var onZoomChange = function(googleMaps){
  map.addListener('zoom_changed', function(e) {
    var newZoom = map.getZoom();
    var markerInstance;
    for (var i = 0; i < masterArray.length; i++ ) {
      markerInstance = masterArray[i];
      //scale(googleMaps, markerInstance);
      scaleAnimator(googleMaps, markerInstance, newZoom);
      //scaleAnimate(googleMaps, markerInstance, currentScale);
    }
  });
}

module.exports = onZoomChange;



///okay so this is what I'm doing right now -- currently the scale function take the arguments of googlemaps
//as well as the marker that it's target on
//but I also need to have it take the argument of, or I could also create a scale2 function that also
//takes the argument of precisely what it should scale to.
//OR, I can create a second scale function that animates it automatically.
/*

So basically, 2 options so far:

1)

          SCALE EVENT ----> intervals ----> scale(new scale)


2)

        SCALE EVENT -----> scale(newDestiantionScale) ---- intervals

        */
