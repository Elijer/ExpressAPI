var makeFuego = function(googleMaps, scaleTool, calibrate){
  //flame.gif dimensions = (300 x 556);
  var scale = calibrate*scaleTool,
      markerX = 300/scale,
      markerY = 556/scale,
      //the anchors signify where on the gif's pixel grid is the anchor, relative
      //to the point (0, 0);
      anchorX = 150/scale, //so 30/15; in the middle of the X axis
      anchorY = 450/scale; //and 55-10 = 45, not quite at the bottom of the y axis, as the fire floats a bit

      //seems to put actual size of the file of 300x500 pixels at around zoom level 20
  //console.log(scale);

  var size = new googleMaps.Size(markerX, markerY);

  fuego = {
    size: size,
    scaledSize: size,
    anchor: new googleMaps.Point(anchorX, anchorY)
  };
  return fuego;
}

module.exports = makeFuego;
