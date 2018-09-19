var $                   = require('jquery'),
    newMarker           = require('./common/newMarker'),
    rootURL             = require ('../rootURL');
    scaleCalculator     =require('./common/scaleCalculator');

var mapClick = function(googleMaps){
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
            var zoomLvl = map.getZoom();
            var scalingCoefficient = scaleCalculator(zoomLvl);
            newMarker(googleMaps, lat, lng, newID, position, scalingCoefficient);
          })
          .catch(function(err){
            console.log(err);
          });
    };

    createFlame(googleMaps, lat, lng, rootURL);

  });
};

module.exports = mapClick;
