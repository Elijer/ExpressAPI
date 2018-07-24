var $                   = require('jquery'),
    rootURL             = require('../../rootURL'),
    loadGoogleMapsApi   = require('load-google-maps-api-2'), //use googleMaps, not google.maps w/ this module
    mapConfig           = require('./mapConfig');

var addClickListener    = require('./addClickListener');

loadGoogleMapsApi.key     = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

buildMap = function(andThen){
  loadGoogleMapsApi().then(function (googleMaps) {
    var darkStyle = require('./mapStyles/dark');
    var newMap = function(googleMaps){
      var map = new googleMaps.Map(document.getElementById('map'), mapConfig);
      return map;
    };
    //Create map object and then pass it into AndThenAnnotateIt callback function
    map = newMap(googleMaps);
    masterArray = [];
    addClickListener(googleMaps, map, rootURL, masterArray);
    andThen(googleMaps, map, masterArray);

  }).catch(function (err) {
    console.error(err);
  });

};

module.exports = buildMap;

/*

            |------- buildMap -------
geo -------+
            |------- annotateMap ----


*/
