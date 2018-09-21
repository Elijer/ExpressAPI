var $                   = require ('jquery');
var loadGoogleMapsApi   = require ('load-google-maps-api-2'); //use googleMaps, not google.maps w/ this module
var mapClick            = require ('./mapClick');
var getMapData          = require('./3__getMapData'); //has two underscores
var newMap              =require('./createMap/newMap');
var boundsPrinter       = require('./tools/boundsPrinter');

loadGoogleMapsApi.key   = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

buildMap = function(){
  loadGoogleMapsApi().then(function (googleMaps) {

    map = newMap(googleMaps);
    masterArray = [];
    gifArray = [];


    //CLICK EVENTS: SELECT ONE;
    //mapClick(googleMaps); //marker gets added to map
    boundsPrinter(googleMaps, 1); //tool for viewing the previous bounds of a screen

    getMapData(googleMaps);

  }).catch(function (err) {
    console.error(err);
  });
};

module.exports = buildMap;
