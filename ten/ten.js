var $                   = require('jquery'),
    rootURL             = require('./rootURL');

var newTen = function(){
  $.post(rootURL + '/api/ten', {value: 10})
  .then(function(newFlame){
    console.log(newFlame);
  })
  .catch(function(err){
    console.log(err);
  });
}

$(document).ready(function() {
  $("#target").submit(function(event) {
    event.preventDefault();
    console.log("handler called");
    /*$.post(rootURL + '/api/ten', {value: 6})
    .then(function(newFlame){
      console.log(newFlame);
    })
    .catch(function(err){
      console.log(err);
    });*/
  });

  $('#hi').click(function(event){
    //console.log('yo');
    //console.log(event);
    $.post(rootURL + '/api/ten', {value: 10})
    .then(function(newFlame){
      console.log(newFlame);
    })
    .catch(function(err){
      console.log(err);
    });
  });
});

//module.exports = newTen;
