var renderLimiter = function(googleMaps){
  map.addListener('bounds_changed', function(){
    var currentBounds = map.getBounds();
    var renderLimit   = 60;
    var mCount = 0;
    var underRenderLimit = true;

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
      var newZoom = map.getZoom();
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
      var m;
      for (var i = 0; i < masterArray.length; i++ ) {
        m = masterArray[i];
        m.setVisible(false);
        gifArray[i].setMap(map);
      }
    }
  })
}

module.exports = renderLimiter;
