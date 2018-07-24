var $                   = require('jquery');

var markerOnClick = function(thisMarker, rootURL, id){
  thisMarker.addListener('click', function() {
    $.ajax({
      method: 'DELETE',
      url: rootURL + '/api/flames/' + id
    })
    console.log("marker with id of " + id + " was deleted")
  });
}

module.exports = markerOnClick;
