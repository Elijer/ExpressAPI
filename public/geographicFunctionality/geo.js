var     buildMap            = require('./buildMap'),
        andThenAnnotateIt   = require('./annotateMap');

var geo = function(){
  buildMap(andThenAnnotateIt);
};

module.exports = geo;
