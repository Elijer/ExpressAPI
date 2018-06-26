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
var newMap = require('./Maps/newMap'),
    addClickListener = require('./Maps/addClickListener'),
    createFlame = require('./Maps/createFlame');


loadGoogleMapsApi().then(function (googleMaps) {
  map = newMap(googleMaps);
  getFlames();
  addClickListener(map, rootURL, createFlame);
  //newMarker(googleMaps);
}).catch(function (err) {
  console.error(err);
});

var newMarker = function(){
  //create marker
  var marker = new google.maps.Marker({
  position: {lat: -34.397, lng: 150.644},
  map: map
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