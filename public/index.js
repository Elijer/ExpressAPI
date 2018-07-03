/*global googleMaps*/
var $ = require('jquery');
var rootURL = require('./rootURL');
console.log("root URL is " + rootURL);

var loadGoogleMapsApi = require('load-google-maps-api-2');

loadGoogleMapsApi.key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
var newMap = require('./Maps/newMap'),
    addClickListener = require('./Maps/addClickListener'),
    getFlames = require('./Maps/getFlames'),
    newMarker = require('./Maps/newMarker');

loadGoogleMapsApi().then(function (googleMaps) {
//when using google.maps objects, instead just use googleMaps with this package.
  map = newMap(googleMaps);
  addClickListener(map, rootURL);

  masterArray = [];
  var zoomLevel = map.zoom;
  getFlames(googleMaps, map, zoomLevel, masterArray);
  console.log(masterArray);

  var exper = 128;
  var markerX = 30/exper;
  var markerY = 55/exper;
  var anchorX = 15/exper;
  var anchorY = 45/exper;
  var zoomX, zoomY, zanchorX, zanchorY;
  var upperLimit = 18;
  var lowerLimit = 12;

  map.addListener('zoom_changed', function() {
        //console.log(masterArray);
        var zoomLevel = map.zoom;
        //getFlames(googleMaps, map);
        console.log(zoomLevel);
        if (zoomLevel >= upperLimit){
          var scaleTool = Math.pow(2, ((upperLimit-8)*-1));
        } else if (zoomLevel <= lowerLimit) {
          var scaleTool = Math.pow(2, ((lowerLimit-8)*-1));
        } else {
          var scaleTool = Math.pow(2, ((zoomLevel-8)*-1));
        }

        //scaleHandler(masterArray, googleMaps, scaleTool);

        for (var i = 0; i < masterArray.length; i++ ) {
          masterArray[i].icon.scaledSize = new googleMaps.Size(markerX/scaleTool, markerY/scaleTool);
          masterArray[i].icon.anchor = new googleMaps.Point(anchorX/scaleTool, anchorY/scaleTool);
        }
  });

}).catch(function (err) {
  console.error(err);
});
