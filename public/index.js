/*global googleMaps*/
var $ = require('jquery');
var rootURL = require('./rootURL');
console.log("root URL is " + rootURL);

var loadGoogleMapsApi = require('load-google-maps-api-2');
/*note that the googleMaps object this npm package returns
is equivalent to the object that google.maps would return if using
the googlemaps API directly from google.
Therefore, googleMaps.maps will return an error */

loadGoogleMapsApi.key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
var map;
var newMap = require('./Maps/newMap'),
    addClickListener = require('./Maps/addClickListener'),
    createFlame = require('./Maps/createFlame'),
    getFlames = require('./Maps/getFlames');
    
var newMarker = require('./Maps/newMarker');


loadGoogleMapsApi().then(function (googleMaps) {
  map = newMap(googleMaps);
  //getFlames(googleMaps, map);
  //addClickListener(map, rootURL, createFlame);
  
  //if you can't see anything, try making exper a smaller number
  var exper = 2048;
  var markerX = 30/exper;
  var markerY = 55/exper;
  var anchorX = 15/exper;
  var anchorY = 45/exper;
  var marker = new google.maps.Marker({
    position: {lat: -34.397, lng: 150.644},
    map: map,
    icon: {url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
    //icon: {url: "https://media.giphy.com/media/xUydljLrnX00Dm59dH/giphy.gif",
    size: new googleMaps.Size(300, 556),
    anchor: new googleMaps.Point(anchorX,anchorY),
    scaledSize: new googleMaps.Size(markerX, markerY),
    title: 'Hello World!'}
  });
  
  map.addListener('zoom_changed', function() {
      //var someData = JSON.parse(window.localStorage.getItem('flames'));
      //console.log(someData);
        var zoomLevel = map.zoom;
        var scaleTool = Math.pow(2, ((zoomLevel-8)*-1));
        console.log("Zoom level is: " + zoomLevel + ", While scaleTool is: " + scaleTool);
        
        
        /*
        if (zoomLevel == 8){
          marker.icon.scaledSize = new googleMaps.Size(markerX, markerY);
          marker.icon.anchor = new googleMaps.Point(anchorX, anchorY);
        } else if (zoomLevel == 9){
          marker.icon.scaledSize = new googleMaps.Size(markerX*2, markerY*2);
          marker.icon.anchor = new googleMaps.Point(anchorX*2, anchorY*2);
        } else if (zoomLevel == 7){
          marker.icon.scaledSize = new googleMaps.Size(markerX/2, markerY/2);
          marker.icon.anchor = new googleMaps.Point(anchorX/2, anchorY/2);
        } else if (zoomLevel == 6){
          marker.icon.scaledSize = new googleMaps.Size(markerX/4, markerY/4);
          marker.icon.anchor = new googleMaps.Point(anchorX/4, anchorY/4);
        } else if (zoomLevel == 10){
          marker.icon.scaledSize = new googleMaps.Size(markerX*4, markerY*4);
          marker.icon.anchor = new googleMaps.Point(anchorX*4, anchorY*4);
        } else if (zoomLevel == 11){
          marker.icon.scaledSize = new googleMaps.Size(markerX*8, markerY*8);
          marker.icon.anchor = new googleMaps.Point(anchorX*8, anchorY*8);
        } else if (zoomLevel == 12){
          marker.icon.scaledSize = new googleMaps.Size(markerX*16, markerY*16);
          marker.icon.anchor = new googleMaps.Point(anchorX*16, anchorY*16);
        } else if (zoomLevel == 13){
          marker.icon.scaledSize = new googleMaps.Size(markerX*32, markerY*32);
          marker.icon.anchor = new googleMaps.Point(anchorX*32, anchorY*32);
        } else if (zoomLevel == 14){
          marker.icon.scaledSize = new googleMaps.Size(markerX*64, markerY*64);
          marker.icon.anchor = new googleMaps.Point(anchorX*64, anchorY*64);
        } else if (zoomLevel == 15){
          marker.icon.scaledSize = new googleMaps.Size(markerX*128, markerY*128);
          marker.icon.anchor = new googleMaps.Point(anchorX*128, anchorY*128);
        } else if (zoomLevel == 16){
          marker.icon.scaledSize = new googleMaps.Size(markerX*256, markerY*256);
          marker.icon.anchor = new googleMaps.Point(anchorX*256, anchorY*256);
        } else if (zoomLevel == 17){
          marker.icon.scaledSize = new googleMaps.Size(markerX*512, markerY*512);
          marker.icon.anchor = new googleMaps.Point(anchorX*512, anchorY*512);
        } else if (zoomLevel == 18){
          marker.icon.scaledSize = new googleMaps.Size(markerX*1024, markerY*1024);
          marker.icon.anchor = new googleMaps.Point(anchorX*1024, anchorY*1024);
        } else if (zoomLevel == 19){
          marker.icon.scaledSize = new googleMaps.Size(markerX*2048, markerY*2048);
          marker.icon.anchor = new googleMaps.Point(anchorX*2048, anchorY*2048);
        } else if (zoomLevel == 20){
          marker.icon.scaledSize = new googleMaps.Size(markerX*4096, markerY*4096);
          marker.icon.anchor = new googleMaps.Point(anchorX*4096, anchorY*4096);
        } else if (zoomLevel == 21){
          marker.icon.scaledSize = new googleMaps.Size(markerX*8192, markerY*8192);
          marker.icon.anchor = new googleMaps.Point(anchorX*8192, anchorY*8192);
        } else if (zoomLevel == 22){
          marker.icon.scaledSize = new googleMaps.Size(markerX*16384, markerY*16384);
          marker.icon.anchor = new googleMaps.Point(anchorX*16384, anchorY*16384);
        }
        */
        
        //var zoomVar = (zoomLevel - 7);
        //marker.icon.scaledSize = new googleMaps.Size(60, 110);
        //marker.icon.anchor = new googleMaps.Point(15*2, 45*2);
        /*
        map.clearMarkers();
      
        someData.forEach(function(e){
        newMarker(googleMaps, e.lat, e.lng, map, 1);
         });*/
  });

}).catch(function (err) {
  console.error(err);
});

//var gmaps_key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';