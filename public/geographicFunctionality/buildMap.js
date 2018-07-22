var $                   = require('jquery'),
    rootURL             = require('../rootURL'),
    loadGoogleMapsApi   = require('load-google-maps-api-2'), //use googleMaps, not google.maps w/ this module
    mapConfig           = require('./mapConfig'),
    andThenAnnotateIt     = require('./annotateMap');

buildMap = function(){
  loadGoogleMapsApi().then(function (googleMaps) {
    var darkStyle = require('./mapStyles/dark');
    var newMap = function(googleMaps){
      var map = new googleMaps.Map(document.getElementById('map'), mapConfig);
      return map;
    };
    map = newMap(googleMaps);
    andThenAnnotateIt(googleMaps, map);

  }).catch(function (err) {
    console.error(err);
  });

};

module.exports = buildMap;
