var printBounds = function(googleMaps, center, bounds, scale){
  var screenBounds = new google.maps.Rectangle({
    elijahPosition: center,
    strokeColor: '#f9371c',
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: '#fed130',
    fillOpacity: .05,
    map: map,
    bounds: bounds
  });
  screenBounds.setMap(map);
};

var boundsPrinter = function(googleMaps, scale){
    var boundsPrinterName = map.addListener('click', function(e) {
    var center = map.getCenter();
    var bounds = map.getBounds();
    printBounds(googleMaps, center, bounds, scale);
    })
}

module.exports = boundsPrinter;
