/*global googleMaps*/
var $ = require('jquery'),
    rootURL = require('./rootURL'),
    //newMap = require('./Maps/newMap'),
    addClickListener = require('./Maps/addClickListener'),
    getFlames = require('./Maps/getFlames'),
    scalingHandler = require('./Maps/scalingHandler'),
    loadGoogleMapsApi = require('load-google-maps-api-2');//use googleMaps, not google.maps w/ this module
loadGoogleMapsApi.key = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';
/*if ("geolocation" in navigator) {
  console.log("geo yes");
} else {
  console.log("geo no");
}*/

loadGoogleMapsApi().then(function (googleMaps) {
  //newMap.js
  var darkStyle = require('./Maps/mapStyles/dark');
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
  map = newMap(googleMaps);

  masterArray = [];

//newMarker
//var newMarker = require('./Maps/newMarker');
var scalingHandler = require('./Maps/scalingHandler');

var newMarker = function(googleMaps, lat, lng, targetMap, id, masterArray, index){

    masterArray[index] = new googleMaps.Marker({
      position: {lat: lat, lng: lng},
      map: targetMap,
      //icon: {url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
      icon: {url: "./Maps/gifs/fireSmall.gif",
      //icon: {url: "./Maps/gifs/tinyFlame.gif",
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

//createFlame
//var createFlame = require('./Maps/createFlame');
var createFlame = function(gMaps, map, lat, lng, rootUrl, array){
      $.post(rootUrl + '/api/flames', {lat: lat, lng: lng})
      .then(function(newFlame){
        console.log(newFlame);
        var newID = newFlame._id;
        var position = array.length;
        newMarker(gMaps, lat, lng, map, newID, array, position);
      })
      .catch(function(err){
        console.log(err);
      });
};


//addClickLister
  var addClickListener = function(gMaps, aMap, rootURL, array){
      aMap.addListener('click', function(e) {
      var latLng = e.latLng;
      var lat = latLng.lat();
      var lng = latLng.lng();

      //no modal
      createFlame(gMaps, aMap, lat, lng, rootURL, array);

      //modal question
      /*
      if (confirm("Hey my guy! Would you like to log the coordinates of this location?")) {
          console.log(lng);
          console.log(lat);
          createFlame(lat, lng, rootURL);
      } else {
          console.log("cancelled logging of coords");
      }
      */
    });
  }
  addClickListener(googleMaps, map, rootURL, masterArray);
  getFlames(googleMaps, map, masterArray);

  map.addListener('zoom_changed', function(e) {
    var markerInstance;
    for (var i = 0; i < masterArray.length; i++ ) {
      markerInstance = masterArray[i];
      scalingHandler(googleMaps, map, markerInstance);
    }
  });

}).catch(function (err) {
  console.error(err);
});
