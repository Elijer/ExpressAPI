var darkStyle = require('./mapStyles/dark');

var newMap = function(gmapObject){
    var map = new gmapObject.Map(document.getElementById('map'), {
    center: {lat: 38.875854, lng: -77.0981069},
    zoom: 14,
    styles: darkStyle,
    backgroundColor: "#212121",
    fullscreenControl: false,
    streetViewControl: false

  });
  return map;
};

module.exports = newMap;
