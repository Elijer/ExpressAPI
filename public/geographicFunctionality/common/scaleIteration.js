var makeFuego           = require('./fuego');

var scaleIteration = function(googleMaps, markerInstance){
  var upperLimit = 18;
  var lowerLimit = 10;
  var scaleTool;

  if (zoomLvl >= upperLimit){
    var scaleTool = Math.pow(2, ((upperLimit-8)*-1));
  } else if (zoomLvl <= lowerLimit) {
    var scaleTool = Math.pow(2, ((lowerLimit-8)*-1));
  } else {
    var scaleTool = Math.pow(2, ((zoomLvl-8)*-1));
  };

  var fuego = makeFuego(googleMaps, scaleTool, 32);
  console.log(scaleTool);

  //iterator
    var current = markerInstance.icon;
    current.size = fuego.size;
    current.scaledSize = fuego.size;
    current.anchor = fuego.anchor;
};

module.exports = scaleIteration;
