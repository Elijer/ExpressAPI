/*global google*/ /* <-- this is just to get rid of google related errors cloud9 sees*/
var $ = require('jquery');
var rootURL = require('./rootURL');
console.log("root URL is " + rootURL);
 
var loadGoogleMapsApi = require('load-google-maps-api-2');
/*note that the googleMaps object this npm package returns
is equivalent to the object that google.maps would return if using
the googlemaps API directly from google.
Therefore, googleMaps.maps will return an error */
loadGoogleMapsApi.key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
var map;
 
loadGoogleMapsApi().then(function (googleMaps) {
  map = newMap(googleMaps);
  getFlames();
  addClickListener(map, rootURL);
  //newMarker(googleMaps);
}).catch(function (err) {
  console.error(err);
});

var newMap = function(gmapObject){
  //create map
    map = new gmapObject.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  return map;
};

var newMarker = function(){
  //create marker
  var marker = new google.maps.Marker({
  position: {lat: -34.397, lng: 150.644},
  map: map
  });
};

var addClickListener = function(aMap, rootURL){
    aMap.addListener('click', function(e) {
    var latLng = e.latLng;
    var lat = latLng.lat();
    var lng = latLng.lng();
    if (confirm("Hey my guy! Would you like to log the coordinates of this location?")) {
        console.log(lng);
        console.log(lat);
        createFlame(lat, lng, rootURL);
    } else {
        console.log("cancelled logging of coords");
    }
  });
}

var createFlame = function(lat, lng, rootUrl){
      $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        console.log(newFlame);
      })
      .catch(function(err){
        console.log(err);
      });
};
    

var getFlames = function(){
     $.getJSON('api/flames')
     .then(function(data){
         console.log(data);
         //console.log("hey buddy boy boo");
         data.forEach(function(e){
             //console.log(e.lat);
             //console.log(e.lng);
             var shmoooop = new google.maps.Marker({
                position: {lat: e.lat, lng: e.lng},
                map: map
            });
         });
     });
}




//const loadGoogleMapsApi = require('load-google-maps-api');
//if not using it, remember to remove from npm

//var gmaps_key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
//gmaps url