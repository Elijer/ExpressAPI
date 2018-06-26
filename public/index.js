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


loadGoogleMapsApi().then(function (googleMaps) {
  map = newMap(googleMaps);
  getFlames(googleMaps, map);
  addClickListener(map, rootURL, createFlame);
}).catch(function (err) {
  console.error(err);
});

//var gmaps_key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';