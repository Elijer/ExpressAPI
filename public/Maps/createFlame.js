var $ = require('jquery');
var newMarker = require('./newMarker');

var createFlame = function(gMaps, map, lat, lng, rootUrl, array){
      $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        console.log(newFlame);
        var newID = newFlame._id;
        var position = array.length - 1;

        newMarker(gMaps, lat, lng, map, newID, array, position)
        //var newMarker = function(googleMaps, lat, lng, targetMap, id, masterArray, index){
      })
      .catch(function(err){
        console.log(err);
      });
};

module.exports = createFlame;
