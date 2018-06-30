var newMarker = function(googleMaps, lat, lng, targetMap, zoomLevel){
    var shmoooop = new googleMaps.Marker({
        position: {lat: lat, lng: lng},
        map: targetMap,
    });
    shmoooop.addListener('click', function() {
      console.log("ooh oohohoh you got me");
    });
}

module.exports = newMarker;
