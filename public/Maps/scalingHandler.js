var scalingHandler = function(gMaps, map, zoomLvl, array){
  console.log(gMaps);
  console.log(map);
  console.log(zoomLvl);
  console.log(array);
  /*
  var exper = 128;
  var markerX = 30/exper;
  var markerY = 55/exper;
  var anchorX = 15/exper;
  var anchorY = 45/exper;
  var zoomX, zoomY, zanchorX, zanchorY;
  var upperLimit = 18;
  var lowerLimit = 12;

  map.addListener('zoom_changed', function() {
        //console.log(masterArray);
        var zoomLevel = map.zoom;
        //getFlames(googleMaps, map);
        console.log(zoomLevel);
        if (zoomLevel >= upperLimit){
          var scaleTool = Math.pow(2, ((upperLimit-8)*-1));
        } else if (zoomLevel <= lowerLimit) {
          var scaleTool = Math.pow(2, ((lowerLimit-8)*-1));
        } else {
          var scaleTool = Math.pow(2, ((zoomLevel-8)*-1));
        }

        //scaleHandler(masterArray, googleMaps, scaleTool);

        for (var i = 0; i < masterArray.length; i++ ) {
          masterArray[i].icon.scaledSize = new googleMaps.Size(markerX/scaleTool, markerY/scaleTool);
          masterArray[i].icon.anchor = new googleMaps.Point(anchorX/scaleTool, anchorY/scaleTool);
        }
  });
  */
};

module.exports = scalingHandler;
