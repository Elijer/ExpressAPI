/*global googleMaps*/
var $ = require('jquery'),
    rootURL = require('./rootURL'),
    //newMap = require('./Maps/newMap'),
    addClickListener = require('./Maps/addClickListener'),
    getFlames = require('./Maps/getFlames'),
    scalingHandler = require('./Maps/scalingHandler'),
    loadGoogleMapsApi = require('load-google-maps-api-2');//use googleMaps, not google.maps w/ this module
loadGoogleMapsApi.key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
/*if ("geolocation" in navigator) {
  console.log("geo yes");
} else {
  console.log("geo no");
}*/

loadGoogleMapsApi().then(function (googleMaps) {
  //newMap.js
  var darkStyle = require('./Maps/mapStyles/dark');
  var newMap = function(gmapObject){
      var map = new gmapObject.Map(document.getElementById('map'), {
      center: {lat: 38.875854, lng: -77.0981069},
      zoom: 14,
      styles: darkStyle,
      backgroundColor: "#212121",
      fullscreenControl: false,
      streetViewControl: false
    });
    return map;
  };
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
