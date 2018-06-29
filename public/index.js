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
  
  var marker = new google.maps.Marker({
    position: {lat: -34.397, lng: 150.644},
    map: map,
    icon: {url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
    //icon: {url: "https://media.giphy.com/media/xUydljLrnX00Dm59dH/giphy.gif",
    size: new googleMaps.Size(300, 556),
    anchor: new googleMaps.Point(15,45),
    scaledSize: new googleMaps.Size(30, 55),
    title: 'Hello World!'}
  });
  
  map.addListener('zoom_changed', function() {
      var someData = JSON.parse(window.localStorage.getItem('flames'));
      console.log(someData);
        var zoomLevel = map.zoom;
        var zoomVar = (zoomLevel - 7);
        console.log(zoomLevel);
        //marker.icon.scaledSize = new googleMaps.Size(60*zoomVar, 90*zoomVar);
        /*
        map.clearMarkers();
      
        someData.forEach(function(e){
        newMarker(googleMaps, e.lat, e.lng, map, 1);
         });
      */
  });

}).catch(function (err) {
  console.error(err);
});

//var gmaps_key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';