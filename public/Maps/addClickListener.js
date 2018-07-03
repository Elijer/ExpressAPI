var createFlame = require('./createFlame');

var addClickListener = function(aMap, rootURL, masterArray){
    console.log(masterArray);
    aMap.addListener('click', function(e) {
    var latLng = e.latLng;
    var lat = latLng.lat();
    var lng = latLng.lng();

    //no modal
    //createFlame(lat, lng, rootURL);

    //modal question
    if (confirm("Hey my guy! Would you like to log the coordinates of this location?")) {
        console.log(lng);
        console.log(lat);
        createFlame(lat, lng, rootURL);
    } else {
        console.log("cancelled logging of coords");
    }
  });
}

module.exports = addClickListener;
