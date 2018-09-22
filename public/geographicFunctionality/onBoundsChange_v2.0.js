var scale               = require('./common/scale');
var scaleCalculator     = require('./common/scaleCalculator');
var boundsPrinter        = require('./tools/boundsPrinter');
var boundsPadder        = require('./tools/boundsPadder');

//var scaleAnimator       = require('./common/scaleAnimator');
//var renderLoop          = require('./tools/renderLoop');

// Haven't really gotten there yet, but the goal of this one is
// to display gifs by priority. The idea is that there will be
// a single ranking that aggregates recent-ness and popularity
// and the least popular posts are dropped until the user zooms in farther
// I'd like to have a banner that say 'not all posts are displayed. Zoom in farther
// to see them all


var onBoundsChange = function(googleMaps){
  map.addListener('bounds_changed', function(){
    var currentBounds = map.getBounds();
    var paddedBounds = boundsPadder(googleMaps, currentBounds, .45);
    var renderLimit = 70;
    var zoomLimit = 16;
    var mCount = 0;
    var underRenderLimit = true;
    var newZoom = map.getZoom();
      //var paddedBounds = boundsPadder(bounds, padding)
      //var scalingCoefficient = scaleCalculator(newZoom);
      //scale(googleMaps, m, scalingCoefficient);

    if (newZoom < zoomLimit){
      for (var i = 0; i < masterArray.length; i++ ) { //flips map to show squares, hide gifs
        if (paddedBounds.contains(masterArray[i].elijahPosition)){
          masterArray[i].setVisible(false);
          gifArray[i].setMap(map);
        }
      }
    } else {
      var counter = 0;
      var scalingCoefficient = scaleCalculator(newZoom);
      for (var i = 0; i < masterArray.length; i++ ) {
        if (counter > renderLimit){ //checks to see if iterator has burned through to renderLimit yet
          //of scaling existing ones, and hiding the remaining squares
          for (var i = 0; i < masterArray.length; i++ ) {
            scale(googleMaps, masterArray[i], scalingCoefficient); //renders existing flames
            gifArray[i].setMap(null); // finishes hiding squares
          }
          break; //and then skips the rendering of any new flames since the limit's been hit
        } else {
          if (paddedBounds.contains(masterArray[i].elijahPosition)){
            scale(googleMaps, masterArray[i], scalingCoefficient); //scales the new gif
            masterArray[i].setVisible(true); //displays the gif
            gifArray[i].setMap(null); //hides its corresponding square
            counter++; //keeps track to make sure it doesn't render any gifs past the renderLimit
          } else {
            masterArray[i].setVisible(false); // any gifs outside viewport are hidden
            //gifArray[i].setMap(null); // as are any squares
          }
        }
      }
    }
  })
}

module.exports = onBoundsChange;
