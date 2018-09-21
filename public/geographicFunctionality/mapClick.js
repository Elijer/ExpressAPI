var $                   = require('jquery');
var rootURL             = require ('../rootURL');
var createFlame         = require('./createFlame');

var mapClick = function(googleMaps){
    map.addListener('click', function(e) {
    //google maps stores click lat & lng in a weird way;
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();

    //createFlame(googleMaps, lat, lng, rootURL);

  });
};

module.exports = mapClick;
