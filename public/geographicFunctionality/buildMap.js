var buildMap = function(andThen){
    loadGoogleMapsApi().then(function (googleMaps) {
      var newMap = function(gmapObject){
          var map = new gmapObject.Map(document.getElementById('map'), {
          center: {lat: 38.875854, lng: -77.0981069},
          zoom: 14,
          styles: darkStyle,
          backgroundColor: "#212121",
          fullscreenControl: false,
          streetViewControl: false
        });
        return map;
      };
      map = newMap(googleMaps);
    }).catch(function (err) {
        console.error(err);
  });
};

module.exports = buildMap;
