var scale               = require('./common/scale');
var scaleCalculator     = require('./common/scaleCalculator');
var boundsPrinter        = require('./tools/boundsPrinter');
var boundsPadder        = require('./tools/boundsPadder');

//var scaleAnimator       = require('./common/scaleAnimator');
//var renderLoop          = require('./tools/renderLoop');

// 'onBoundsChange_v1.1' improvements --- wider bounding box for smoother loading of gifs


var onBoundsChange = function(googleMaps){
  map.addListener('bounds_changed', function(){
    var currentBounds = map.getBounds();
    var renderLimit = 80;
    var zoomLimit = 17;
    var mCount = 0;
    var underRenderLimit = true;
    var newZoom = map.getZoom();
    if (newZoom >= zoomLimit){


//    A) VISIBLE POST DETERMINER LOOP:
//    DETERMINES IF # OF POSTS < renderLimit
    var paddedBounds = boundsPadder(googleMaps, currentBounds, .45);
      for (var i = 0; i < masterArray.length; i++ ) {
        m = masterArray[i];
        if (paddedBounds.contains(m.elijahPosition)){
          mCount++;
        }
        if (mCount > renderLimit){
          underRenderLimit = false;
          break;
        }
      }


//    B) GIF RENDERING LOOP:
//    Renders gifs in current bounds (or paddedBounds) and hides the rest
      if (underRenderLimit){
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
      } else {

//      Hides all gifs if under render limit
        for (var i = 0; i < masterArray.length; i++ ) {
          var m = masterArray[i];
          m.setVisible(false);
          gifArray[i].setMap(map);
        }
      }
    } else {

//    Hides all gifs if over scale limit
      for (var i = 0; i < masterArray.length; i++ ) {
        var m = masterArray[i];
        m.setVisible(false);
        gifArray[i].setMap(map);
      }
    }
  })
}

module.exports = onBoundsChange;
