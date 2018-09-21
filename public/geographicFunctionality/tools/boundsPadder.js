var shortestDistance = require('./shortestDistance');

var boundsPadder = function(googleMaps, bounds, amount){
  var north = bounds.f.f;
  var south = bounds.f.b;
  var east  = bounds.b.f;
  var west  = bounds.b.b;

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
