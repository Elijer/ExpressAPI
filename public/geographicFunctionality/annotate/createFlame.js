var $                   = require('jquery');
var newMarker           = require('./newMarker');

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

module.exports = createFlame;
