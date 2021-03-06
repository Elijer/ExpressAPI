//var darkStyle = require('./mapStyles/dark');
//https://mapstyle.withgoogle.com/
var mapStyle = require('./mapStyles/dark_cities');

var mapConfig = {
    center: {lat: 38.875854, lng: -77.0981069},
    //zoom: 14,
    zoom: 12,
    styles: mapStyle,
    backgroundColor: "#212121",
    fullscreenControl: false,
    streetViewControl: false,
    disableDefaultUI: true //gets rid of all the buttons on the map
};

module.exports = mapConfig;
