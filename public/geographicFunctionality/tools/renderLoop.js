var renderLoop = function(length, callBack){
  for (var i = 0; i < length; i++ ) {
    callBack();
  }
}

module.exports = renderLoop;
