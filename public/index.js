/*global googleMaps*/
var $ = require('jquery');
var rootURL = require('./rootURL');
console.log("root URL is " + rootURL);

var loadGoogleMapsApi = require('load-google-maps-api-2');//use googleMaps, not google.maps w/ this module

loadGoogleMapsApi.key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
var newMap = require('./Maps/newMap'),
    addClickListener = require('./Maps/addClickListener'),
    getFlames = require('./Maps/getFlames'),
    scalingHandler = require('./Maps/scalingHandler');

loadGoogleMapsApi().then(function (googleMaps) {
  map = newMap(googleMaps);
  addClickListener(map, rootURL);

  masterArray = [];
  var zoomLevel = map.zoom;
  getFlames(googleMaps, map, masterArray);

  scalingHandler(googleMaps, map, zoomLevel, masterArray);

}).catch(function (err) {
  console.error(err);
});
