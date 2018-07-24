var rootURL             = require('../../rootURL');
var $                   = require('jquery');

var newMarker           = require('./newMarker');
var renderFlames        = require('./renderFlames');
var onZoomChange        = require('./onZoomChange');

var annotateMap = function(googleMaps, map, masterArray){

  $.getJSON('api/flames')
    .then(function(data){
      renderFlames(googleMaps, data);
  });

  onZoomChange(googleMaps, map, masterArray);

}

module.exports = annotateMap;


/*
annotateMap(){
  getData(){
    loopThrough(data){
      createMarker(){
        scalingHandler();
      clickListener();
      }
    }
  }
}

buildMap(callback, emptyArray){
  andThenAnnotateIt(emptyArray);
  clickListener(emptyArray){
    emptyArray.push(
      newMarker = createMarker(){
        scalingHandler();
        clickListener();
      }
    )
  }
};
}
*/

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
