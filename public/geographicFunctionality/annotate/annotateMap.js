var rootURL             = require('../../rootURL');
var $                   = require('jquery');

var makeFuego           = require('./fuego');
var scalingHandler      = require('./scalingHandler');
var newMarker           = require('./newMarker');
var addClickListener    = require('./addClickListener');

var annotateMap = function(googleMaps, map){
  masterArray = [];

    addClickListener(googleMaps, map, rootURL, masterArray);

    //getFlames
    var doSetTimeout = function(googleMaps, lat, lng, targetMap, id, masterArray, i) {
      setTimeout(function() {
        newMarker(googleMaps, lat, lng, targetMap, id, masterArray, i);
      }, i*20);
    };

    var getFlames = function(googleMaps, targetMap, masterArray){
      var zoomLvl = targetMap.zoom;
       $.getJSON('api/flames')
       .then(function(data){
         for (var i = 0; i < data.length; i++){
           var current = data[i],
           lat = current.lat,
           lng = current.lng,
           id = current._id;
           doSetTimeout(googleMaps, lat, lng, targetMap, id, masterArray, i);
         };
       });
    };
    getFlames(googleMaps, map, masterArray);

    map.addListener('zoom_changed', function(e) {
      var markerInstance;
      for (var i = 0; i < masterArray.length; i++ ) {
        markerInstance = masterArray[i];
        scalingHandler(googleMaps, map, markerInstance);
      }
    });
  }

module.exports = annotateMap;
