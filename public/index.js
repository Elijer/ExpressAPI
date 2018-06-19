var $ = require('jquery');
var rootURL = require('./rootURL');
console.log(rootURL);
 
var loadGoogleMapsApi = require('load-google-maps-api-2');
/*note that the googleMaps object this npm package returns
is equivalent to the object that google.maps would return if using
the googlemaps API directly from google.
Therefore, googleMaps.maps will return an error */
loadGoogleMapsApi.key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
var map;

var newMap = function(gmapObject){
  //create map
    map = new gmapObject.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  
  //create marker
  var marker = new google.maps.Marker({
  position: {lat: -34.397, lng: 150.644},
  map: map
});
  
}
 
loadGoogleMapsApi().then(function (googleMaps) {
  console.log(googleMaps);
  console.log("success");
  newMap(googleMaps);
  
}).catch(function (err) {
  console.error(err);
});




//const loadGoogleMapsApi = require('load-google-maps-api');
//if not using it, remember to remove from npm

//var gmaps_key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
//gmaps url