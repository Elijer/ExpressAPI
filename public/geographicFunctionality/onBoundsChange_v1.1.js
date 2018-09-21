var scale               = require('./common/scale');
var scaleCalculator     = require('./common/scaleCalculator');
var boundsPrinter        = require('./tools/boundsPrinter');
var boundsPadder        = require('./tools/boundsPadder');

//var scaleAnimator       = require('./common/scaleAnimator');
//var renderLoop          = require('./tools/renderLoop');

/*
DESCRIPTION: This Function adds a 'bounds_changed' listener to the map.
This listener runs a function that validates;
1) whether the map is zoomed in enough to run (i.e., above zoomLimit)
2) there is a small enough # of posts (underRenderLimit) within current bounds to display them
    as gifs without significant lag.

The purpose of this function is mostly that of compromise -- the goal of the function is to
display posts as gifs when the conditions are right.


//1.1 improvements --- wider bounding box for smoother loading of gifs
*/


var onBoundsChange = function(googleMaps){
  map.addListener('bounds_changed', function(){
    var currentBounds = map.getBounds();
    var renderLimit = 80;
    var zoomLimit = 17;
    var mCount = 0;
    var underRenderLimit = true;
    var newZoom = map.getZoom();
    console.log(newZoom);

    if (newZoom >= zoomLimit){
    //VISIBLE POST DETERMINER LOOP:
    //DETERMINES IF # OF POSTS < renderLimit
    var paddedBounds = boundsPadder(googleMaps, currentBounds, .45);
      for (var i = 0; i < masterArray.length; i++ ) {
        m = masterArray[i];
        //using paddedBounds here includes markers just out of sight
        //when determining amount of markers contained
        //Considering making the paddedBounds change per zoom level -- it's really the most important
        //for higher zoom levels
        if (paddedBounds.contains(m.elijahPosition)){
          mCount++;
        }
        if (mCount > renderLimit){
          underRenderLimit = false;
          break;
        }
      }

    //GIF RENDERING LOOP
    //RENDERS GIFS FOR THOSE THAT ARE IN currentBounds (or in padded bounds)
    //AND HIDES THOSE THAT ARE NOT
      if (underRenderLimit){
        //boundsPrinter(googleMaps);
        //var paddedBounds = boundsPadder(bounds, padding)
        var scalingCoefficient = scaleCalculator(newZoom);
        var m;
        for (var i = 0; i < masterArray.length; i++ ) {
          m = masterArray[i];
          if (paddedBounds.contains(m.elijahPosition)){
            m.setVisible(true);
            gifArray[i].setMap(null);
            scale(googleMaps, m, scalingCoefficient);
          }
        }
        //Hides all gifs if under render limit
      } else {
        for (var i = 0; i < masterArray.length; i++ ) {
          var m = masterArray[i];
          m.setVisible(false);
          gifArray[i].setMap(map);
        }
      }
      //hides all gifs if over scale limit
    } else {
      for (var i = 0; i < masterArray.length; i++ ) {
        var m = masterArray[i];
        m.setVisible(false);
        gifArray[i].setMap(map);
      }
    }
  })
}

module.exports = onBoundsChange;
