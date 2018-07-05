var $ = require('jquery');
var rootURL = require('../rootURL');
var scalingHandler = require('./scalingHandler');


var newMarker = function(googleMaps, lat, lng, map, id, index){
    //console.log(map.masterArray);
    map.masterArray[index] = new googleMaps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      icon: {url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
      title: 'Hello World!'},
      iterationID: id
    });

    //what happens if I do current = map.masterArray[]index
    //and then scalingHandler(googleMaps, map, current); ?
    //it is clearer and less data intensive
    scalingHandler(googleMaps, map, index);


    map.masterArray[index].addListener('click', function() {
      console.log(id)
    });

    //Delete on Click
    /*
    masterArray[index].addListener('click', function() {
      $.ajax({
        method: 'DELETE',
        url: rootURL + '/api/flames/' + id
      })
      console.log("marker with id of " + id + " was deleted")
    });*/
}

module.exports = newMarker;
