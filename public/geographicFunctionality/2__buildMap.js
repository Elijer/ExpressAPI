var $                   = require ('jquery'),
    loadGoogleMapsApi   = require ('load-google-maps-api-2'), //use googleMaps, not google.maps w/ this module
    mapClick            = require ('./mapClick');
    getMapData          = require('./3__getMapData'); //has two underscores
    newMap              =require('./createMap/newMap');

loadGoogleMapsApi.key   = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

buildMap = function(){
  loadGoogleMapsApi().then(function (googleMaps) {

    map = newMap(googleMaps);
    masterArray = [];
    gifArray = [];

    mapClick(googleMaps);
    getMapData(googleMaps);

  }).catch(function (err) {
    console.error(err);
  });
};

module.exports = buildMap;
