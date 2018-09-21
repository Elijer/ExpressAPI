var shortestDistance = require('./shortestDistance');

var boundsPrinter = function(googleMaps, scale){
    var boundsPrinterName = map.addListener('click', function(e) {
    var center = map.getCenter();
    var bounds = map.getBounds();
    printBounds(googleMaps, center, bounds, scale);
    })
}

var printBounds = function(googleMaps, center, bounds, scale){
  var north = bounds.f.f;
  var south = bounds.f.b;
  var east  = bounds.b.f;
  var west  = bounds.b.b;


  var horizontalPadding = (shortestDistance(west, east)/2) * scale;
  var verticalPadding = (shortestDistance(north, south)/2) * scale;


  var screenBounds = new google.maps.Rectangle({
    elijahPosition: center,
    strokeColor: '#f9371c',
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: '#fed130',
    fillOpacity: .05,
    map: map,
    bounds: {
      north: north + verticalPadding,
      south: south - verticalPadding,
      east: east + horizontalPadding,
      west: west - horizontalPadding
    }
  });
  screenBounds.setMap(map);
};

module.exports = boundsPrinter;
