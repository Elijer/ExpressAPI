var $ = require('jquery');
var rootURL = require('../rootURL');

var newMarker = function(googleMaps, lat, lng, targetMap, zoomLevel, id, masterArray, index){
    /*masterArray[index] = new googleMaps.Marker({
        position: {lat: lat, lng: lng},
        map: targetMap,
        iterationID: id
    });*/
    /*
    var exper = 128;
    var markerX = 30/exper;
    var markerY = 55/exper;
    var anchorX = 15/exper;
    var anchorY = 45/exper;
    var zoomX, zoomY, zanchorX, zanchorY;
    var upperLimit = 18;
    var lowerLimit = 12;
    */
    masterArray[index] = new googleMaps.Marker({
      position: {lat: lat, lng: lng},
      map: targetMap,
      icon: {url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
      //icon: {url: "https://media.giphy.com/media/xUydljLrnX00Dm59dH/giphy.gif",
      size: new googleMaps.Size(300, 556),
      anchor: new googleMaps.Point(15, 45),
      scaledSize: new googleMaps.Size(30, 55),
      title: 'Hello World!'},
      iterationID: id
    });


    masterArray[index].addListener('click', function() {
      $.ajax({
        method: 'DELETE',
        url: rootURL + '/api/flames/' + id
      })
      console.log("marker with id of " + id + " was deleted")
    });
}

module.exports = newMarker;
