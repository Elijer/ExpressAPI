var scale               = require('./common/scale');
var scaleCalculator     = require('./common/scaleCalculator');

//var scaleAnimator       = require('./common/scaleAnimator');
//var renderLoop          = require('./tools/renderLoop');


var onBoundsChange = function(googleMaps){
  map.addListener('bounds_changed', function(){
    var currentBounds = map.getBounds();
    var renderLimit = 60;
    var zoomLimit = 16;
    var mCount = 0;
    var underRenderLimit = true;
    var newZoom = map.getZoom();


    if (newZoom >= zoomLimit){

//    A) VISIBLE POST DETERMINER LOOP:
//    DETERMINES IF # OF POSTS < renderLimit
      for (var i = 0; i < masterArray.length; i++ ) {
        m = masterArray[i];
        if (currentBounds.contains(m.elijahPosition)){
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
        var scalingCoefficient = scaleCalculator(newZoom);
        var m;
        for (var i = 0; i < masterArray.length; i++ ) {
          m = masterArray[i];
          if (currentBounds.contains(m.elijahPosition)){
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
