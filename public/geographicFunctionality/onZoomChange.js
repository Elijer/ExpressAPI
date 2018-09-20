var scale  = require('./common/scale');
var scaleAnimator  = require('./common/scaleAnimator');
var scaleCalculator     =require('./common/scaleCalculator');


var onZoomChange = function(googleMaps){
  map.addListener('zoom_changed', function(zzzz) {
    var newZoom = map.getZoom();
    console.log("So the old zoom was " + map.oldZoom + ", but the new zoom is " + newZoom);

    if (newZoom >= 17){
      var scalingCoefficient = scaleCalculator(newZoom);
      var markerInstance;
      for (var i = 0; i < masterArray.length; i++ ) {
        markerInstance = masterArray[i];
        //markerInstance.visible = true;
        scale(googleMaps, markerInstance, scalingCoefficient);
        gifArray[i].map = null;
        //scaleAnimator(googleMaps, markerInstance, newZoom);
        console.log(gifArray[i]);

        /*
        strokeOpacity: 0.8
        fillOpacity: 1
        */
      }
    } else {
      for (var i = 0; i < masterArray.length; i++ ) {
        masterArray[i].visible = false;
        gifArray[i].map = map;
        //gifArray[i].visible = true;
      }
    }
    map.oldZoom = newZoom;
  });
}

module.exports = onZoomChange;

/*

Potential solution for potential future problem: It may be very laggy to load a large amount of
markers that may appear at like, zoom level 16, or zoom level 10.

So, I can do this. At zoom level 16, they will be loaded as static images, tiny ones that have
been optimized to be very small, rudimentary files.

At zoom level 10, then can simply dissappear. I should make sure that I am implementing
a this in a way that doesn't even render them at all -- it's more than possible that
google maps uses up the same amount of CPU rending a marker that is 0px by 0px as it does
for one that is 100x100.

If I want, I could probably even substitute them with a heatmap.

But then when you zoom in, they become individual (at like 16), and beautiful gifs at 18 or 19.

This approach could make sure that no matter how many markers are loaded, it still won't overload
the rendering capabilities of the server.

*/


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
