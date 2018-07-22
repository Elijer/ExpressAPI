var $ = require('jquery');
var rootURL = require('../rootURL');
var scalingHandler = require('./scalingHandler');

var newMarker = function(googleMaps, lat, lng, targetMap, id, masterArray, index){

    masterArray[index] = new googleMaps.Marker({
      position: {lat: lat, lng: lng},
      map: targetMap,
      //icon: {url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
      //icon: {url: "https://media.giphy.com/media/l2R0aKwejYr8ycKAg/giphy.gif",
      icon: {url: "../fireSmall.gif",
      title: 'Hello World!'},
      optimized: false,
      iterationID: id
    });

    scalingHandler(googleMaps, map, masterArray[index]);

    masterArray[index].addListener('click', function() {
      $.ajax({
        method: 'DELETE',
        url: rootURL + '/api/flames/' + id
      })
      console.log("marker with id of " + id + " was deleted")
    });
}

module.exports = newMarker;
