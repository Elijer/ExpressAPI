//var _fuego = require('./markerTypes/fuego');
//var fuego = _fuego(gMaps);

var scalingHandler = function(gMaps, map, array){

  map.addListener('zoom_changed', function() {

    var zoomLvl = map.zoom;
    var upperLimit = 18;
    var lowerLimit = 12;
    var scaleTool;

    if (zoomLvl >= upperLimit){
      var scaleTool = Math.pow(2, ((upperLimit-8)*-1));
    } else if (zoomLvl <= lowerLimit) {
      var scaleTool = Math.pow(2, ((lowerLimit-8)*-1));
    } else {
      var scaleTool = Math.pow(2, ((zoomLvl-8)*-1));
    };

    var exper = 128;
    var markerX = 30/exper;
    var markerY = 55/exper;
    var anchorX = 15/exper;
    var anchorY = 45/exper;

    fuego = {
      size: new gMaps.Size(markerX/scaleTool, markerY/scaleTool),
      scaledSize: new gMaps.Size(markerX/scaleTool, markerY/scaleTool),
      anchor: new gMaps.Point(anchorX/scaleTool, anchorY/scaleTool)
    }

    //iterator
    for (var i = 0; i < masterArray.length; i++ ) {
      var current = array[i].icon;
      current.size = fuego.size;
      current.scaledSize = fuego.size;
      //current.scaledSize, current.size = fuego.size;
      current.anchor = fuego.anchor;


      /*
      array[i].icon.size = new gMaps.Size(markerX/scaleTool, markerY/scaleTool);
      array[i].icon.scaledSize = new gMaps.Size(markerX/scaleTool, markerY/scaleTool);
      array[i].icon.anchor = new gMaps.Point(anchorX/scaleTool, anchorY/scaleTool);
      */
    }
  });
};

module.exports = scalingHandler;
