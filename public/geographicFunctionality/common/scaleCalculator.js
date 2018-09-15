var scaleCalculator = function(googleMaps, markerInstance, zoomLvl){
  var closest = 22; //closest zoomLevel that scaling should stop
  var farthest = 13; // farthest zoomLevel that scaling should stop
  var multiplyBy; //coefficient by which to multiply the gif's size


  if (zoomLvl >= closest){
    multiplyBy = Math.pow(2, ((closest-8)*-1));
  }

  else if (zoomLvl <= farthest){
    multiplyBy = Math.pow(2, ((farthest-8)*-1));
  }

  else {
    multiplyBy = Math.pow(2, ((zoomLvl-8)*-1));
  };


  /*
  example:

  given: Math.pow(2, ((zoomLvl-8)*-1));

  and:
  zoomLvl = 16
  closest = 22
  farthest = 13,

  and:
  Math.pow(base, exponent)

  multiplyBy = Math.pow(2, ((16-8)*-1)) = 2 to the power of -8 = 0.00390625





  */



}

module.exports = scaleCalculator;
