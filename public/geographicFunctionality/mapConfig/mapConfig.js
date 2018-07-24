var darkStyle = require('./mapStyles/dark');

var mapConfig = {
    center: {lat: 38.875854, lng: -77.0981069},
    zoom: 14,
    styles: darkStyle,
    backgroundColor: "#212121",
    fullscreenControl: false,
    streetViewControl: false
};

module.exports = mapConfig;
