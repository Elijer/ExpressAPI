var $ = require('jquery');
const loadGoogleMapsApi = require('load-google-maps-api');
var gmaps_key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

var map;

loadGoogleMapsApi({key: gmaps_key}).then(function (googleMaps) {
  map = new googleMaps.Map(document.querySelector('#map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  })
}).catch(function (error) {
  console.error(error)
});


