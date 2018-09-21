var rootURL             = require('../rootURL');
var $                   = require('jquery');

var newMarker           = require('./common/newMarker');
//var onZoomChange        = require('./onZoomChange');
var onBoundsChange      = require('./onBoundsChange_v1.1');
var scaleCalculator     = require('./common/scaleCalculator');


var mapData = function(googleMaps){
  $.getJSON('api/flames')
  .then(function(data){
    for (var i = 0; i < data.length; i++){
      var flame = data[i];
      var zoomLvl = map.getZoom();
      var scalingCoefficient = scaleCalculator(zoomLvl);
      newMarker(googleMaps, flame.lat, flame.lng, flame._id, i, scalingCoefficient);
    };
  });
  //onZoomChange(googleMaps);
  onBoundsChange(googleMaps);
  /* wait to call onZoomChange until after markers created; onZoomChange resizes them
  and there's nothing to resize until they exist */
}

module.exports = mapData;

/*
stuff I want the file structure to support:
1. pass in click listener for marker as an argument, or even
    as a method that is included in the markerConfig
2. automatically link scalingHandler to every marker
3. create a structure that will allow getFlames to be configurable as well as repeatable.
  there should be a way to use getFlames as the initial renderer, AND as a re-renderer
    I want it to be able to, in the future, take;
    --coords that it can take into account
    --a user
    --a timeRange
    --a type, etc.


*/
