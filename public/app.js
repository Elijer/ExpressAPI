var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        })
        .addListener('click', function(e) {
          var latLng = e.latLng;
          var lat = latLng.lat();
          var lng = latLng.lng();
          if (confirm("Hey my guy! Would you like to log the coordinates of this location?")) {
              console.log(lng);
              console.log(lat);
              createFlame(lat, lng);
          } else {
              console.log("cancelled logging of coords");
          }
        });
      }
      /* global $ */
      $(document).ready(function(){
         console.log("DA DOKKY IS REDDY");
         $.getJSON('/api/flames')
         .then(function(data){
             console.log(data);
         });
      });
      
      function createFlame(lat, lng){
        $.post('/api/flames', {lat: lat, lng: lng})
        .then(function(newFlame){
          console.log(newFlame);
        })
        .catch(function(err){
          console.log(err);
        });
      }