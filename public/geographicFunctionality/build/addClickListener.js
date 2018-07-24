var $                   = require('jquery');
var createFlame     = require('../annotate/createFlame');

var addClickListener = function(googleMaps, aMap, rootURL, array){
    aMap.addListener('click', function(e) {
    //google maps stores click lat & lng in a weird way;
    //var latLng = e.latLng;
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    //no modal
    //createFlames is used both here and in the annotate folder. It lives in the annotate folder.
    createFlame(googleMaps, aMap, lat, lng, rootURL, array);

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
