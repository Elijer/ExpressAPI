var scalingHandler      = require('./scalingHandler');
var markerOnClick       = require('./markerOnClick');
var rootURL             = require('../rootURL');
var $                   = require('jquery');

var gif_FLAME = "./geographicFunctionality/gifs/flames/flame.gif";

var newMarker = function(googleMaps, lat, lng, id, index){

    masterArray[index] = new googleMaps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      icon: {url: gif_FLAME},
      iterationID: id,
      //without "optimized: false", gif seems to freeze on server (but not on local)
      optimized: false,
    });

    scalingHandler(googleMaps, masterArray[index]);

    markerOnClick(masterArray[index], rootURL, id);
};

module.exports = newMarker;
