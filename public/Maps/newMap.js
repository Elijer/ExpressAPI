var newMap = function(gmapObject){
    var map = new gmapObject.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  return map;
};

module.exports = newMap;