var scale  = require('./common/scale');
var scaleAnimate  = require('./common/scaleAnimate');


var onZoomChange = function(googleMaps){
  map.addListener('zoom_changed', function(e) {
    var newZoom = map.getZoom();
    var markerInstance;
    for (var i = 0; i < masterArray.length; i++ ) {
      markerInstance = masterArray[i];
      //scale(googleMaps, markerInstance);
      scaleAnimate(googleMaps, markerInstance, newZoom);
      //scaleAnimate(googleMaps, markerInstance, currentScale);
    }

    ///timer experiment
    var zoomInterval = setInterval(myTimer, 166.5);
    //166.5 is roughly half of .333 seconds, allowing two instances to fire during zoom animation

    function myTimer() {
      console.log(Math.random(0, 1));
    }

    setTimeout(function(){
      clearInterval(zoomInterval);
    }, 333);
    ///.333 seconds is the amount of time it takes for the zoom animation on google maps to happen

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
