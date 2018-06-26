var $ = require('jquery');

var getFlames = function(googleMaps, targetMap){
     $.getJSON('api/flames')
     .then(function(data){
         console.log(data);
         //console.log("hey buddy boy boo");
         data.forEach(function(e){
             //console.log(e.lat);
             //console.log(e.lng);
             var shmoooop = new googleMaps.Marker({
                position: {lat: e.lat, lng: e.lng},
                map: targetMap
            });
         });
     });
}