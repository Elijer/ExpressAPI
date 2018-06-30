var newMarker = function(googleMaps, lat, lng, targetMap, zoomLevel){
    var shmoooop = new googleMaps.Marker({
        position: {lat: lat, lng: lng},
        map: targetMap,
    });
}

module.exports = newMarker;
