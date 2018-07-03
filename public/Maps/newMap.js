var darkStyle = require('./mapStyles/dark');

var newMap = function(gmapObject){
    var map = new gmapObject.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    styles: darkStyle
  });
  return map;
};

module.exports = newMap;
