var scale               = require('./common/scale');
var scaleCalculator     = require('./common/scaleCalculator');

//var scaleAnimator       = require('./common/scaleAnimator');
//var renderLoop          = require('./tools/renderLoop');


/*
DESCRIPTION: See the description for './onBoundsChange_v1'.

This function borrows a lot of the rationale and function of v1, but
adds on the intelligence of displaying only the most recent posts, and
hiding the older ones, thereby taken relevance into account as to what
to display.

In order for this to work, the database query needs to be made in acsending order
using the following code in API_FLAME/flames_routes.js:

                exports.getTodos = function(req, res){
                    db.Todo.find().sort( {created_date: -1 } )
                    ...
                }
*/

var onBoundsChange = function(googleMaps){
  map.addListener('bounds_changed', function(){
    var currentBounds = map.getBounds();
    var renderLimit = 60;
    var zoomLimit = 16;
    var mCount = 0;
    var underRenderLimit = true;
    var newZoom = map.getZoom();
    console.log(newZoom);

    if (newZoom >= zoomLimit){
    //DETERMINES IF # OF POSTS < renderLimit
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

    //IF SO, RENDERS GIFS FOR THOSE THAT ARE IN currentBounds
    //AND HIDES THOSE THAT ARE NOT
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
        for (var i = 0; i < masterArray.length; i++ ) {
          var m = masterArray[i];
          m.setVisible(false);
          gifArray[i].setMap(map);
        }
      }
    }
  })
}

module.exports = onBoundsChange;
