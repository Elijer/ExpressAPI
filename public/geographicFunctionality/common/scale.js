var makeFuego           = require('./fuego');

var scale = function(googleMaps, markerInstance, scalingCoefficient){
    var fuego = makeFuego(googleMaps, scalingCoefficient);
    //iterator
      var current = markerInstance.icon;
      current.size = fuego.size;
      current.scaledSize = fuego.size;
      current.anchor = fuego.anchor;
};

module.exports = scale;

/*

var scaleCalculator     =require('./scaleCalculator');
var scalingCoefficient = scaleCalculator(zoomLvl);
function(googleMaps, markerInstance, scalingCoefficient)
*/
