var $                   = require ('jquery'),
    loadGoogleMapsApi   = require ('load-google-maps-api-2'), //use googleMaps, not google.maps w/ this module
    mapConfig           = require ('./mapConfig/mapConfig'),
    mapClick            = require ('./mapClick');
    getMapData          = require('./3__getMapData'); //has two underscores

loadGoogleMapsApi.key   = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

buildMap = function(){
  loadGoogleMapsApi().then(function (googleMaps) {

    var newMap = function(googleMaps){
      var map = new googleMaps.Map(document.getElementById('map'), mapConfig);
      map.oldZoom = map.getZoom();
      return map;
    };

    map = newMap(googleMaps);
    masterArray = [];
    mapClick(googleMaps);
    getMapData(googleMaps);

  }).catch(function (err) {
    console.error(err);
  });
};

module.exports = buildMap;
