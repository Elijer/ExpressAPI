var newMarker = function(googleMaps, lat, lng, targetMap, scale){
    var shmoooop = new googleMaps.Marker({
        position: {lat: lat, lng: lng},
        map: targetMap,
        //optimized: false,
        
        icon: {url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
            scaledSize: new googleMaps.Size(30*scale, 60*scale)},
        origin: new googleMaps.Point(0,0), // origin
        anchor: new googleMaps.Point(0, 0)
    });
}

module.exports = newMarker;