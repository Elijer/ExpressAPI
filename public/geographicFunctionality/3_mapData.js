var rootURL             = require('../rootURL'),
    $                   = require('jquery');

var newMarker           = require('./common/newMarker'),
    onZoomChange        = require('./onZoomChange');


var mapData = function(googleMaps){
  $.getJSON('api/flames')
  .then(function(data){
    for (var i = 0; i < data.length; i++){
      var flame = data[i];
      var zoomLvl = map.getZoom();
      newMarker(googleMaps, flame.lat, flame.lng, flame._id, i, zoomLvl);
    };
  });
  onZoomChange(googleMaps);
}

module.exports = mapData;

/*
stuff I want the file structure to support:
1. Include a single markerConfig argument in the createMarker function
2. pass in click listener for marker as an argument, or even
    as a method that is included in the markerConfig
3. automatically link scalingHandler to ever marker
4. create a structure that will allow getFlames to be configurable as well as repeatable.
  there should be a way to use getFlames as the initial renderer, AND as a re-renderer
    I want it to be able to, in the future, take;
    --coords that it can take into account
    --a user
    --a timeRange
    --a type, etc.


*/
