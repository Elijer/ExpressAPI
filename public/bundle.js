(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var poop = require('./poop');
console.log(poop);

var gmapsAPI = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBI6f3-WMTwlVP7CVhpKiMbVlWvgI0s1_E&callback=initMap';

var map;
      function initMap() {
        map = new gmapsAPI.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        })
        .addListener('click', function(e) {
          var latLng = e.latLng;
          var lat = latLng.lat();
          var lng = latLng.lng();
          if (confirm("Hey my guy! Would you like to log the coordinates of this location?")) {
              console.log(lng);
              console.log(lat);
              createFlame(lat, lng);
          } else {
              console.log("cancelled logging of coords");
          }
        });
      }
      /* global $ */
      $(document).ready(function(){
         console.log("DA DOKKY IS REDDY");
         $.getJSON('api/flames')
         .then(function(data){
             console.log(data);
         });
      });
      
      function createFlame(lat, lng){
        $.post('https://www.squarrow.icu/api/flames', {lat: lat, lng: lng})
        .then(function(newFlame){
          console.log(newFlame);
        })
        .catch(function(err){
          console.log(err);
        });
      }
},{"./poop":2}],2:[function(require,module,exports){
var poop = "thblllt";
module.exports = poop;
},{}]},{},[1]);
