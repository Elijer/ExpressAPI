var makeFuego = function(gMaps, scaleTool, calibrate){

  var scale = calibrate*scaleTool,
      markerX = 30/scale,
      markerY = 55/scale,
      anchorX = 15/scale,
      anchorY = 45/scale;

  fuego = {
    size: new gMaps.Size(markerX, markerY),
    scaledSize: new gMaps.Size(markerX, markerY),
    anchor: new gMaps.Point(anchorX, anchorY)
  };
  return fuego;
}

module.exports = makeFuego;
