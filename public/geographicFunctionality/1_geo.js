var     buildMap            = require('./2_buildMap'),
        andThenAnnotateIt   = require('./3_mapData');

var geo = function(){
  buildMap(andThenAnnotateIt);
};

module.exports = geo;
