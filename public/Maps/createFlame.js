var $ = require('jquery');
var newMarker = require('./newMarker');

var createFlame = function(gMaps, map, lat, lng, rootUrl){
      $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        console.log(newFlame);
        var newID = newFlame._id;
        var position = map.masterArray.length;
        newMarker(gMaps, lat, lng, map, newID, position);
      })
      .catch(function(err){
        console.log(err);
      });
};

module.exports = createFlame;
