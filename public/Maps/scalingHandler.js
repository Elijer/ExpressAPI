var makeFuego = require('./markerTypes/fuego');

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

    var fuego = makeFuego(gMaps, scaleTool, 128);

    //iterator
    for (var i = 0; i < masterArray.length; i++ ) {
      var current = array[i].icon;
      current.size = fuego.size;
      current.scaledSize = fuego.size;
      current.anchor = fuego.anchor;
    }
  });
};

module.exports = scalingHandler;
