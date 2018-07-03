/*global googleMaps*/
var $ = require('jquery');
var rootURL = require('./rootURL');

var loadGoogleMapsApi = require('load-google-maps-api-2');//use googleMaps, not google.maps w/ this module

loadGoogleMapsApi.key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
var newMap = require('./Maps/newMap'),
    addClickListener = require('./Maps/addClickListener'),
    getFlames = require('./Maps/getFlames'),
    scalingHandler = require('./Maps/scalingHandler');

loadGoogleMapsApi().then(function (googleMaps) {
  map = newMap(googleMaps);
  masterArray = [];
  addClickListener(googleMaps, map, rootURL, masterArray);

  getFlames(googleMaps, map, masterArray);

  map.addListener('zoom_changed', function(e) {
    var markerInstance;
    for (var i = 0; i < masterArray.length; i++ ) {
      markerInstance = masterArray[i];
      scalingHandler(googleMaps, map, markerInstance);
    }
  });

}).catch(function (err) {
  console.error(err);
});
