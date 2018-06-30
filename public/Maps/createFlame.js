var $ = require('jquery');

var createFlame = function(lat, lng, rootUrl){
      $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        console.log(newFlame);
      })
      .catch(function(err){
        console.log(err);
      });
};

module.exports = createFlame;