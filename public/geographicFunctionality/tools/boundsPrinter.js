var shortestDistance = require('./shortestDistance');

var boundsPrinter = function(googleMaps, amount){
    var boundsPrinterName = map.addListener('click', function(e) {
    var center = map.getCenter();
    var bounds = map.getBounds();
    printBounds(googleMaps, center, bounds, amount); //prints with amount of padding specified
    printBounds(googleMaps, center, bounds, 0); //prints without padding
    })
}

var printBounds = function(googleMaps, center, bounds, amount){
  // I don't fucking know why google defines the bounds object this way,
  // but it's so confusing. So I give new values that are easier to read.
  var north = bounds.f.f;
  var south = bounds.f.b;
  var east  = bounds.b.f;
  var west  = bounds.b.b;

  var horizontalPadding = (shortestDistance(west, east)/2) * amount;
  var verticalPadding = (shortestDistance(north, south)/2) * amount;


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
