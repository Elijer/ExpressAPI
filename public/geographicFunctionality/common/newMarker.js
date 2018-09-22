var scale               = require('./scale');
var markerOnClick       = require('./markerOnClick');
var rootURL             = require('../../rootURL');
var $                   = require('jquery');

//flame Gif
var gif_FLAME = "./geographicFunctionality/gifs/flames/flame.gif"


var newMarker = function(googleMaps, lat, lng, id, index, scalingCoefficient){

  masterArray[index] = new googleMaps.Marker({
    elijahPosition: {lat: lat, lng: lng},
    position: {lat: lat, lng: lng},
    map: map,
    icon: {url: gif_FLAME},
    iterationID: id,
    optimized: false,
    visible: false
    /*optimize is a useful, complicated option that will take still gifs and pngs and save them
    into one image or something, drastically increasing performance. However, if markers are created as
    optimized, it seems impossible to change them later. If they are created with optimized: false,
    it is possible then to change them to 'true' and back again, but doing this seems to sacrifice
    any performance improvements optimization achieves anyways.
    */
  });




  var r = .00005;
  var h = r / .83333333333;
  gifArray[index] = new google.maps.Rectangle({
    elijahPosition: {lat: lat, lng: lng},
    strokeColor: '#f9371c',
    strokeOpacity: 0.8,
    strokeWeight: 1.4,
    fillColor: '#fed130',
    fillOpacity: 1,
    map: map,
    bounds: {
      north: lat+r,
      south: lat-r,
      east:  lng+h,
      west:  lng-h
    }
  });



  scale(googleMaps, masterArray[index], scalingCoefficient);
  markerOnClick(masterArray[index], rootURL, id);

};

module.exports = newMarker;
