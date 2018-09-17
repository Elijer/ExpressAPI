var scale               = require('./scale');
var markerOnClick       = require('./markerOnClick');
var rootURL             = require('../../rootURL');
var $                   = require('jquery');

//Flame static
//var gif_FLAME = "./geographicFunctionality/gifs/flames/flameStatic.gif";

//flame Gif
var gif_FLAME = "./geographicFunctionality/gifs/flames/flame.gif"

var newMarker = function(googleMaps, lat, lng, id, index, zoomLvl){

    masterArray[index] = new googleMaps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      icon: {url: gif_FLAME},
      iterationID: id,
      //without "optimized: false", gif seems to freeze on server (but not on local)
      optimized: false,
    });

    scale(googleMaps, masterArray[index], zoomLvl);

    markerOnClick(masterArray[index], rootURL, id);
};

module.exports = newMarker;
