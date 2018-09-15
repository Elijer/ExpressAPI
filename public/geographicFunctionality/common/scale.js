var makeFuego           = require('./fuego');

var scale = function(googleMaps, markerInstance, zoomLvl){
  console.log(zoomLvl);
  //zoom level should be passed IN as an arg instead of being queried for everything single iteration
  //ooh shit, yah, these scaling calculations are all done for every single marker too.
  //Like, the re-scaling should be redone for each marker
  //but NOT the calculations themselves. those should be done once.

  var upperLimit = 22;
  var lowerLimit = 13;
  var scaleTool;

  if (zoomLvl >= upperLimit){
    var scaleTool = Math.pow(2, ((upperLimit-8)*-1));
  } else if (zoomLvl <= lowerLimit) {
    var scaleTool = Math.pow(2, ((lowerLimit-8)*-1));
  } else {
    var scaleTool = Math.pow(2, ((zoomLvl-8)*-1));
  };

  var fuego = makeFuego(googleMaps, scaleTool, 500);

  //iterator
    var current = markerInstance.icon;
    current.size = fuego.size;
    current.scaledSize = fuego.size;
    current.anchor = fuego.anchor;
};

module.exports = scale;
