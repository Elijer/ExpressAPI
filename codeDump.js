//5 Various zoomChanged loops and iterators
/*
    if (zoomLvl > 20){

      for (var i = 0; i < masterArray.length; i++ ) {
        var markerInstance = masterArray[i];

        markerInstance = new googleMaps.Marker({
            position: {lat: markerInstance.elijahPosition.lat, lng: markerInstance.elijahPosition.lng},
            map: map,
            icon: {url: gif_FLAME},
            iterationID: markerInstance.id,
            //without "optimized: false", gif seems to freeze on server (but not on local)
            optimized: false,
        });

      }
    } else {

      for (var i = 0; i < masterArray.length; i++ ) {
        var markerInstance = masterArray[i];
        var lat = markerInstance.elijahPosition.lat;
        var lng = markerInstance.elijahPosition.lng;
        var r = .00003;
        var h = r / .83333333333;
        markerInstance = new google.maps.Rectangle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 1,
          fillColor: '#FF0000',
          fillOpacity: 1,
          map: map,
          bounds: {
            north: lat+r,
            south: lat-r,
            east:  lng+h,
            west:  lng-h
          }
        });
      }

    }*/

/*
    if (newZoom >= 18) {
      var scalingCoefficient = scaleCalculator(newZoom);
      for (var i = 0; i < masterArray.length; i++ ) {
        var markerInstance = masterArray[i];
        markerInstance.optimized = false;
        scale(googleMaps, markerInstance, scalingCoefficient);
      }
    } else if (newZoom < 18){
      var scalingCoefficient = scaleCalculator(12);
        for (var i = 0; i < masterArray.length; i++ ) {
          var markerInstance = masterArray[i];
          scale(googleMaps, markerInstance, scalingCoefficient);
          markerInstance.optimized = true;
    }
  }
  */

    /*
    if (newZoom <= 16){
      console.log("optimized");
      for (var i = 0; i < masterArray.length; i++ ) {
        var markerInstance = masterArray[i];
        markerInstance.icon.url = {url: gif_RUFORD};
        markerInstance.optimized = true;
        //scaleAnimator(googleMaps, markerInstance, newZoom);
      }
    } else {
      console.log("not optimized");
      var scalingCoefficient = scaleCalculator(newZoom);
      for (var i = 0; i < masterArray.length; i++ ) {
        markerInstance = masterArray[i];
        markerInstance.optimized = false;
        markerInstance.icon.url = {url: gif_FLAME};
        scale(googleMaps, markerInstance, scalingCoefficient);
        //scaleAnimator(googleMaps, markerInstance, newZoom);
      }
    }
    */






//4
////THIS IS IN CASE FOR SOME REASON I ONLY WANTED MARKERS WITHIN VIEWFINDER TO BE VISIBLWE
//But google does this automatically I think, so the result is just there being a delay
//to the markers loaded when a user zooms out.
//However, this can be adjusted to use a different google bounds() object,
//Or a series of them to only render markers in the center of the map or something
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
    }

DON'T FORGET ---
The key to this was adding the following code into the a newMarker:

masterArray[index] = new googleMaps.Marker({
  position: {lat: lat, lng: lng},
  elijahPosition: {lat: lat, lng: lng},
  map: map,
  icon: {url: gif_FLAME},
  iterationID: id,
  //without "optimized: false", gif seems to freeze on server (but not on local)
  optimized: true,
});

See that line that says elijahPosition?
I know, it's COMPLETELY redundant with position, but I didn't write google maps,
so I had to make this concession. If you console.log(masterArray[index]) for this,
you will be able to access the coords from elijahPosition, but NOT from the
default position attribute. I dunno why. Honestly, I'm sure there's a way google
maps wants me to access the position attribute that I'm not, but whatever it is
I couldn't figure it out.

*/








//3
//this one is for doing the staggeredMarker loading in case I can't figure out how to do it again
/*
var newMarker           = require('./newMarker');

var doSetTimeout = function(googleMaps, lat, lng, map, id, masterArray, i) {
  setTimeout(function() {
    newMarker(googleMaps, lat, lng, map, id, masterArray, i);
  }, i*20);
};

var renderFlames = function(googleMaps, data){
  for (var i = 0; i < data.length; i++){
    var flame = data[i];
    //console.log(flame.id);
    newMarker(googleMaps, flame.lat, flame.lng, map, flame._id, masterArray, i);
    //doSetTimeout(googleMaps, lat, lng, map, id, masterArray, i);
  };
};

module.exports = renderFlames;
*/









//2
//var gmaps_key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

  //how to store stuff in the browser
//var someData = JSON.parse(window.localStorage.getItem('flames'));
//console.log(someData);








//1
/*
///test marker code -- place in loadGoogleMapsApi fujnction
var exper = 128;
var markerX = 30/exper;
var markerY = 55/exper;
var anchorX = 15/exper;
var anchorY = 45/exper;
var zoomX, zoomY, zanchorX, zanchorY;
var upperLimit = 18;
var lowerLimit = 12;

var marker = new google.maps.Marker({
  position: {lat: -34.397, lng: 150.644},
  map: map,
  icon: {url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
  //icon: {url: "https://media.giphy.com/media/xUydljLrnX00Dm59dH/giphy.gif",
  size: new googleMaps.Size(300, 556),
  anchor: new googleMaps.Point(anchorX, anchorY),
  scaledSize: new googleMaps.Size(markerX, markerY),
  title: 'Hello World!'}
});

///and then put this in the zoom function to make it, you know, zoom
marker.icon.scaledSize = new googleMaps.Size(markerX/scaleTool, markerY/scaleTool);
marker.icon.anchor = new googleMaps.Point(anchorX/scaleTool, anchorY/scaleTool);


*/
