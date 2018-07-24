var $                   = require('jquery');
var createFlame     = require('../annotate/createFlame');

var addClickListener = function(googleMaps, rootURL){
    map.addListener('click', function(e) {
    //google maps stores click lat & lng in a weird way;
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    createFlame(googleMaps, lat, lng, rootURL, );

    //modal question
    /*
    if (confirm("Hey my guy! Would you like to log the coordinates of this location?")) {
        console.log(lng);
        console.log(lat);
        createFlame(lat, lng, rootURL);
    } else {
        console.log("cancelled logging of coords");
    }
    */
  });
};

module.exports = addClickListener;
