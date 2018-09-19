//var darkStyle = require('./mapStyles/dark');
var mapStyle = require('./mapStyles/dark_cities');

var mapConfig = {
    center: {lat: 38.875854, lng: -77.0981069},
    //zoom: 14,
    zoom: 12,
    styles: mapStyle,
    backgroundColor: "#212121",
    fullscreenControl: false,
    streetViewControl: false
};

module.exports = mapConfig;
