var makeFuego           = require('./fuego');

var scaleAnimator = function(googleMaps, markerInstance, newZoom){
  //console.log(newZoom);
  var duration = 333;
  var subdivides = 4;
  var countDown = subdivides
  var interval = duration/subdivides;

    var zoomInterval = setInterval(myTimer, interval);

    //166.5 is roughly half of .333 seconds, allowing two instances to fire during zoom animation

    function myTimer() {
      console.log(countDown);
      countDown--
        //scaleIteration(googleMaps, markerInstance, currentScale, iteration)
    }

    setTimeout(function(){
      clearInterval(zoomInterval);
    }, duration);
    ///.333 seconds is the amount of time it takes for the zoom animation on google maps to happen


};

module.exports = scaleAnimator;
