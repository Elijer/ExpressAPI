var $ = require('jquery');
var newMarker = require('./newMarker');

var createFlame = function(gMaps, map, lat, lng, rootUrl, array){
      $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        console.log(newFlame);
        console.log(gMaps);
        //newMarker()
      })
      .catch(function(err){
        console.log(err);
      });
};

module.exports = createFlame;
