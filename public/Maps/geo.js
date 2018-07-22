var $                   = require('jquery'),
    rootURL             = require('../rootURL'),
    loadGoogleMapsApi   = require('load-google-maps-api-2');//use googleMaps, not google.maps w/ this module

loadGoogleMapsApi.key   = 'AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E';

geo = function(){
  loadGoogleMapsApi().then(function (googleMaps) {
    //newMap.js
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
    map = newMap(googleMaps);

    masterArray = [];

  //makeFuego
  //var makeFuego = require('./Maps/markerTypes/fuego');
  var makeFuego = function(gMaps, scaleTool, calibrate){

    var scale = calibrate*scaleTool,
        markerX = 30/scale,
        markerY = 55/scale,
        anchorX = 15/scale,
        anchorY = 45/scale;

    fuego = {
      size: new gMaps.Size(markerX, markerY),
      scaledSize: new gMaps.Size(markerX, markerY),
      anchor: new gMaps.Point(anchorX, anchorY)
    };
    return fuego;
  }

  //scaling Handler
  //var scalingHandler = require('./Maps/scalingHandler');
  var scalingHandler = function(gMaps, map, markerInstance){
    var zoomLvl = map.zoom;
    var upperLimit = 18;
    var lowerLimit = 9;
    var scaleTool;

    if (zoomLvl >= upperLimit){
      var scaleTool = Math.pow(2, ((upperLimit-8)*-1));
    } else if (zoomLvl <= lowerLimit) {
      var scaleTool = Math.pow(2, ((lowerLimit-8)*-1));
    } else {
      var scaleTool = Math.pow(2, ((zoomLvl-8)*-1));
    };

    var fuego = makeFuego(gMaps, scaleTool, 32);

    //iterator
      var current = markerInstance.icon;
      current.size = fuego.size;
      current.scaledSize = fuego.size;
      current.anchor = fuego.anchor;
  };

  //newMarker
  //var newMarker = require('./Maps/newMarker');
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

    //getFlames
    var doSetTimeout = function(googleMaps, lat, lng, targetMap, id, masterArray, i) {
      setTimeout(function() {
        newMarker(googleMaps, lat, lng, targetMap, id, masterArray, i);
      }, i*20);
    };

    var getFlames = function(googleMaps, targetMap, masterArray){
      var zoomLvl = targetMap.zoom;
       $.getJSON('api/flames')
       .then(function(data){
         for (var i = 0; i < data.length; i++){
           var current = data[i],
           lat = current.lat,
           lng = current.lng,
           id = current._id;
           doSetTimeout(googleMaps, lat, lng, targetMap, id, masterArray, i);
         };
       });
    };
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

}

module.exports = geo;
