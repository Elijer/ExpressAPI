var rootURL             = require('../rootURL');
var $                   = require('jquery');

var newMarker           = require('./common/newMarker');
var scaleCalculator     = require('./common/scaleCalculator');

var createFlame = function(googleMaps, lat, lng, rootUrl){
      $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        console.log(newFlame);

        var newID = newFlame._id,
            position = masterArray.length,
            zoomLvl = map.getZoom(),
            scalingCoefficient = scaleCalculator(zoomLvl);

        newMarker(googleMaps, lat, lng, newID, position, scalingCoefficient);


      })
      .catch(function(err){
        console.log(err);
      });
};

module.exports = createFlame;
