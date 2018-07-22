var andThenAnnotateIt   = require('./annotateMap'),
    buildMap            = require('./buildMap');

var geo = function(){
  buildMap(andThenAnnotateIt);
};

module.exports = geo;
