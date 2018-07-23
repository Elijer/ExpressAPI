var rootURL             = require('../../rootURL');
var $                   = require('jquery');

var makeFuego           = require('./fuego');
var scalingHandler      = require('./scalingHandler');
var newMarker           = require('./newMarker');
var addClickListener    = require('./addClickListener');
var getFlames           = require('./getFlames');
var renderFlames        = require('./renderFlames');

var annotateMap = function(googleMaps, map){
  masterArray = [];
  $.getJSON('api/flames')
  .then(function(data){
    renderFlames(data);
  });
  getFlames(googleMaps, map, masterArray);

  addClickListener(googleMaps, map, rootURL, masterArray);

  map.addListener('zoom_changed', function(e) {
    var markerInstance;
    for (var i = 0; i < masterArray.length; i++ ) {
      markerInstance = masterArray[i];
      scalingHandler(googleMaps, map, markerInstance);
    }
  });
}

module.exports = annotateMap;
