var shortestDistance = require('./shortestDistance');

var boundsPadder = function(googleMaps, bounds, amount){
  var north = bounds.j.j;
  var south = bounds.j.l;
  var east  = bounds.l.j;
  var west  = bounds.l.l;
  //google maps changed it from the letter l and b to j and l for some reason.
  //...
  ///those fuckers


  var horizontalPadding = (shortestDistance(west, east)/2) * amount;
  var verticalPadding = (shortestDistance(north, south)/2) * amount;

  var sw = new google.maps.LatLng(south - verticalPadding, west - horizontalPadding);
  var ne = new google.maps.LatLng(north + verticalPadding, east + horizontalPadding);

  var newBounds = new google.maps.LatLngBounds(sw, ne);

  /*
  var newBounds = new google.maps.LatLngBoundsLiteral({
    east: east + horizontalPadding,
    north: north + verticalPadding,
    south: south - verticalPadding,
    west: west - horizontalPadding
  });
  */

  return newBounds;
}

module.exports = boundsPadder;
