var $                   = require('jquery');
var newMarker           = require('./newMarker');

var createFlame = function(googleMaps, map, lat, lng, rootUrl, array){
      $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        console.log(newFlame);
        var newID = newFlame._id;
        var position = array.length;
        newMarker(googleMaps, lat, lng, map, newID, array, position);
      })
      .catch(function(err){
        console.log(err);
      });
};

module.exports = createFlame;
