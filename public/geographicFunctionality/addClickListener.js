var $                   = require('jquery');
var newMarker           = require('./newMarker');

var addClickListener = function(googleMaps, rootURL){
    map.addListener('click', function(e) {
    //google maps stores click lat & lng in a weird way;
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();

    var createFlame = function(googleMaps, lat, lng, rootUrl){
          $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
          .then(function(newFlame){
            console.log(newFlame);
            var newID = newFlame._id;
            var position = masterArray.length;
            newMarker(googleMaps, lat, lng, newID, position);
          })
          .catch(function(err){
            console.log(err);
          });
    };

    createFlame(googleMaps, lat, lng, rootURL);

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
