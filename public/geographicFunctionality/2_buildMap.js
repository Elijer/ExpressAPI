var $                   = require ('jquery'),
    loadGoogleMapsApi   = require ('load-google-maps-api-2'), //use googleMaps, not google.maps w/ this module
    rootURL             = require ('../rootURL'),
    mapConfig           = require ('./mapConfig/mapConfig'),
    mapClick            = require ('./mapClick');

loadGoogleMapsApi.key     = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

buildMap = function(andThen){
  loadGoogleMapsApi().then(function (googleMaps) {
    var newMap = function(googleMaps){
      var map = new googleMaps.Map(document.getElementById('map'), mapConfig);
      return map;
    };

    map = newMap(googleMaps);
    masterArray = [];
    mapClick(googleMaps, rootURL);
    andThen(googleMaps);

  }).catch(function (err) {
    console.error(err);
  });

};

module.exports = buildMap;
