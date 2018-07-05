var addClickListener    = require('../Maps/addClickListener');
var rootURL             = require('../rootURL');
var darkStyle           = require('./mapStyles/dark');

var newMap = function(gmapObject, array){
    var map = new gmapObject.Map(document.getElementById('map'), {
    center: {lat: 38.875854, lng: -77.0981069},
    zoom: 14,
    styles: darkStyle
  });

  map.masterArray = [];

  addClickListener(gmapObject, map, rootURL, map.masterArray);

  return map;
};




module.exports = newMap;
