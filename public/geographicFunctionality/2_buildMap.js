var $                   = require ('jquery'),
    loadGoogleMapsApi   = require ('load-google-maps-api-2'), //use googleMaps, not google.maps w/ this module
    mapConfig           = require ('./mapConfig/mapConfig'),
    mapClick            = require ('./mapClick');

loadGoogleMapsApi.key   = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

buildMap = function(andThen){
  loadGoogleMapsApi().then(function (googleMaps) {

    var newMap = function(googleMaps){
      var map = new googleMaps.Map(document.getElementById('map'), mapConfig);
      map.oldZoom = map.getZoom();
      /*I had to get creative here. googleMaps doesn't offer a way to easily
      query what the pre-zoom zoom level was. So instead I just saved a
      variable called oldZoom into the map object itself, an object that
      trickles through rest of the application and serves as a good repository
      for global code*/
      return map;
    };

    map = newMap(googleMaps);
    masterArray = [];
    mapClick(googleMaps);
    andThen(googleMaps);

  }).catch(function (err) {
    console.error(err);
  });

};

module.exports = buildMap;
