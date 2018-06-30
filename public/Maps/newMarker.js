var $ = require('jquery');
var rootURL = require('../rootURL');

var newMarker = function(googleMaps, lat, lng, targetMap, zoomLevel, id){
    var shmoooop = new googleMaps.Marker({
        position: {lat: lat, lng: lng},
        map: targetMap,
        artichokes: id
    });
    shmoooop.addListener('click', function() {
      console.log(shmoooop.artichokes);
      $.ajax({
        method: 'DELETE',
        url: rootURL + '/api/flames/' + shmoooop.artichokes
      })

    });
}

module.exports = newMarker;
