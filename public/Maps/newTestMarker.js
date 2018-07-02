var $ = require('jquery');
var fuego = require('./markerConfig');

var newTestMarker = function(map, gMaps){
  testMarker = new gMaps.Marker({
    position: {lat: -34.397, lng: 150.644},
    map: map,
    icon: {
      url: "https://media.giphy.com/media/26BRt5hkD6hLzTl3q/giphy.gif",
      size: new gMaps.Size(300, 556),
      scaledSize: new gMaps.Size(fuego.x, fuego.y),
      anchor: new gMaps.Point(fuego.anchorX, fuego.anchorY),
    }
  })
  return testMarker;
}

module.exports = newTestMarker;

//icon: {url: "https://media.giphy.com/media/xUydljLrnX00Dm59dH/giphy.gif",
