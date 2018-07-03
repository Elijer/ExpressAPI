var makeFuego = require('./markerTypes/fuego');

var scalingHandler = function(gMaps, map, markerInstance){
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

  var fuego = makeFuego(gMaps, scaleTool, 32);

  //iterator
    var current = markerInstance.icon;
    current.size = fuego.size;
    current.scaledSize = fuego.size;
    current.anchor = fuego.anchor;
};

module.exports = scalingHandler;
