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
  var zoomLevel = map.zoom;
  getFlames(googleMaps, map, zoomLevel);
  addClickListener(map, rootURL, createFlame);

  //if you can't see anything, try making exper a smaller number
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

  map.addListener('zoom_changed', function() {
        var zoomLevel = map.zoom;
        getFlames(googleMaps, map, zoomLevel);
        //getFlames(googleMaps, map);
        console.log(zoomLevel);
        if (zoomLevel >= upperLimit){
          var scaleTool = Math.pow(2, ((upperLimit-8)*-1));
        } else if (zoomLevel <= lowerLimit) {
          var scaleTool = Math.pow(2, ((lowerLimit-8)*-1));
        } else {
          var scaleTool = Math.pow(2, ((zoomLevel-8)*-1));
        }
        marker.icon.scaledSize = new googleMaps.Size(markerX/scaleTool, markerY/scaleTool);
        marker.icon.anchor = new googleMaps.Point(anchorX/scaleTool, anchorY/scaleTool);
  });

}).catch(function (err) {
  console.error(err);
});

//var gmaps_key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

  //how to store stuff in the browser
//var someData = JSON.parse(window.localStorage.getItem('flames'));
//console.log(someData);
