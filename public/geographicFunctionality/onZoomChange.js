
/* PEP TALK

You can use this:
  map.addListener('bounds_changed'...

Look. I this is going to be really light on the rendering, it needs to be air tight.
It needs to be optimized. I need you to think about all of your options here,
and to think ahead about potential problems so you aren't wasting time foolin around.
What is the most efficient way to do this? What are the shortcuts?

And I need you to experiment, too. Like by answering these questions:

In a controlled environment, which is better --
setMap(null), opacity = 0, visible = false?
Ad nauseum. Figure it out.
How expensive is it to be calculating the number of markers in the viewfinder?
You can obviously cut the function off once it reaches a certain number.
the scale() function can be fired separately in a 'zoom_changed' listener,
for speed, OR it could be fired within 'bounds_changed'. I don't know which ones
is cpu thriftier.

And at bigger zoom levels, you can cut it off anyways.

There can be a careful network of if statements.

Good luck! You're doin great :)


*/

var scale             = require('./common/scale');
var scaleAnimator     = require('./common/scaleAnimator');
var scaleCalculator   =require('./common/scaleCalculator');
var boundsPrinter     = require('./tools/boundsPrinter');




var onZoomChange = function(googleMaps){


  var makeScreenBounds = function(){
    var center = map.getCenter();
    var theBounds = map.getBounds()
    var screenBounds = new google.maps.Rectangle({
      elijahPosition: center,
      strokeColor: '#f9371c',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#fed130',
      fillOpacity: .05,
      map: map,
      bounds: theBounds
    });
    screenBounds.setMap(map);
  };


  map.addListener('zoom_changed', function() {
    var newZoom = map.getZoom();
    console.log("So the old zoom was " + map.oldZoom + ", but the new zoom is " + newZoom);
    map.oldZoom = newZoom;
  })

  map.addListener('bounds_changed', function(){
    console.log(map.getBounds());
  })

  boundsPrinter(googleMaps, true);


}





module.exports = onZoomChange;



/*
var onZoomChange = function(googleMaps){
  map.addListener('zoom_changed', function(zzzz) {
    var newZoom = map.getZoom();
    console.log("So the old zoom was " + map.oldZoom + ", but the new zoom is " + newZoom);

    var renderLimit = 10;

    var counter = 0;
    for (var i = 0; i < masterArray.length; i++ ) {
      var currentBounds = map.getBounds();
      if (currentBounds.contains(masterArray[i].elijahPosition)){
        counter++;
      }
    };
    console.log(counter);

    if (counter <= 10){
      var scalingCoefficient = scaleCalculator(newZoom);
      var markerInstance;
      for (var i = 0; i < masterArray.length; i++ ) {
        markerInstance = masterArray[i];
        //markerInstance.visible = true;
        markerInstance.setVisible(true);
        scale(googleMaps, markerInstance, scalingCoefficient);
        gifArray[i].setMap(null);
        //scaleAnimator(googleMaps, markerInstance, newZoom);
      }
    } else {
      for (var i = 0; i < masterArray.length; i++ ) {
        masterArray[i].visible = false;
        gifArray[i].setMap(map);
        //gifArray[i].visible = true;
      }
    }



    /*if (currentBounds.contains(latLng)){
      markerInstance.setVisible(true);
      var fuego = makeFuego(googleMaps, scalingCoefficient);
      var ruford = makeRuford(googleMaps, scalingCoefficient)
      //iterator
        var current = markerInstance.icon;
        current.size = ruford.size;
        current.scaledSize = ruford.size;
        current.anchor = ruford.anchor;
    } else {
      markerInstance.setVisible(false);
    }*/



    /*
    if (newZoom >= 17){
      var scalingCoefficient = scaleCalculator(newZoom);
      var markerInstance;
      for (var i = 0; i < masterArray.length; i++ ) {
        markerInstance = masterArray[i];
        //markerInstance.visible = true;
        markerInstance.setVisible(true);
        scale(googleMaps, markerInstance, scalingCoefficient);
        gifArray[i].setMap(null);
        //scaleAnimator(googleMaps, markerInstance, newZoom);
      }
    } else {
      for (var i = 0; i < masterArray.length; i++ ) {
        masterArray[i].visible = false;
        gifArray[i].setMap(map);
        //gifArray[i].visible = true;
      }
    }
    map.oldZoom = newZoom;
  });
}
*/




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
