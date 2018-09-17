var $                   = require('jquery'),
    rootURL             = require('./rootURL'),
    geo                 = require('./geographicFunctionality/1_geo');

geo();

/*
var didMessage = JSON.parse(window.localStorage.getItem('message'));
if (!didMessage){
  var fillerUp_Message = "Hey Noah and Dustin and whoever else! See how many posts you can make on the map. I wanna get this database all full so that I can see what happens when it has 5k posts on it or so.";
  setTimeout(function(){
    alert(fillerUp_Message);
  }, 3500);
  window.localStorage.setItem("message", true);
  console.log("message had not been seen");
} else {
  window.localStorage.setItem("message", true);
  console.log("message was already seen");
}
*/
