var makeFuego = function(googleMaps, scaleTool, calibrate){

  var scale = calibrate*scaleTool,
      markerX = 30/scale,
      markerY = 55/scale,
      anchorX = 15/scale,
      anchorY = 45/scale;

  fuego = {
    size: new googleMaps.Size(markerX, markerY),
    scaledSize: new googleMaps.Size(markerX, markerY),
    anchor: new googleMaps.Point(anchorX, anchorY)
  };
  return fuego;
}

module.exports = makeFuego;
