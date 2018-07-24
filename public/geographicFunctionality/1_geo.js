var     buildMap            = require('./2_buildMap'),
        andThenAnnotateIt   = require('./3_mapData'),
        geolocation         = require ('./geolocation');

var geo = function(){
  buildMap(andThenAnnotateIt);
};

geolocation();

module.exports = geo;



/*//////////////          BLUEPRINT          ////////////



                            1_geo
                              .
                              |
                              .
                          2_buildMap
                              .
                              |
                              .
                    ......................................
                    |                   |                |
                    .                   .                .
                3_mapData           mapClick         mapConfig
                    .                   .                .
                    |                   |                |
             ............................            mapStyles
             |                 |
             .                 .
        onZoomChange       newMarker
             |                 |
             .                 .
             ............................
                    |                   |
                    .                   .
                  scale            markerOnClick




//////////////////////////////////////////////////////////
*/
