var $ = require('jquery');

var getFlames = function(googleMaps, targetMap){
     $.getJSON('api/flames')
     .then(function(data){
         console.log(data);
         data.forEach(function(e){
             var shmoooop = new googleMaps.Marker({
                position: {lat: e.lat, lng: e.lng},
                map: targetMap
            });
         });
     });
}

module.exports = getFlames;