var $                   = require('jquery');
var rootURL             = require('./rootURL');
var loadGoogleMapsApi   = require('load-google-maps-api-2');//use googleMaps, not google.maps w/ this module
var newMap              = require('./Maps/newMap'),
    addClickListener    = require('./Maps/addClickListener'),
    getFlames           = require('./Maps/getFlames'),
    scalingHandler      = require('./Maps/scalingHandler');

loadGoogleMapsApi.key   = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

loadGoogleMapsApi().then(function (googleMaps) {
  map = newMap(googleMaps);
  getFlames(googleMaps, map);

  map.addListener('zoom_changed', function(e) {
    for (var i = 0; i < this.masterArray.length; i++ ) {
      scalingHandler(googleMaps, map, i);
    }
  });

}).catch(function (err) {
  console.error(err);
});
