var     buildMap            = require('./build/buildMap'),
        andThenAnnotateIt   = require('./annotate/annotateMap');

var geo = function(){
  buildMap(andThenAnnotateIt);
};

module.exports = geo;
