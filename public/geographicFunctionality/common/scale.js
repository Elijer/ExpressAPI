var makeFuego           = require('./fuego');

var scale = function(googleMaps, markerInstance, zoomLvl){

  //google zoom level range: 0-22
  //get the zoom level at any time by calling "map.getZoom();"

  var closest = 22, //don't continue scaling up gif past above zoom level
      farthest = 12, //don't continue scaling down gif below this zoom level

      oneOne = 21; /*the zoom level at which scaling coefficient = 1

  In other words, if oneOne = 22 and the user is zoomed into 22, that's the scale at which
  The gif will be displayed at full size. If you never even want it to reach this size,
  make the value of oneOne even higher than the highest zoom level possible, which is 22.

  @22, a 300px*556px gif is about the size of a trashcan
  @18, it's like the size of the WL building.
  */

  var scalingCoefficient;

  if (zoomLvl >= closest){
    var scalingCoefficient = Math.pow(2, ((closest-oneOne)*-1));
  } else if (zoomLvl <= farthest) {
    //var scalingCoefficient = Math.pow(2, ((farthest-oneOne)*-1));
    scalingCoefficient = 300; //this is about as small as they go
    //I should really replace them with static images at this point though.
  } else {
    var scalingCoefficient = Math.pow(2, ((zoomLvl-oneOne)*-1));
  };

  var fuego = makeFuego(googleMaps, scalingCoefficient);

  //iterator
    var current = markerInstance.icon;
    current.size = fuego.size;
    current.scaledSize = fuego.size;
    current.anchor = fuego.anchor;
};

module.exports = scale;




/* THE SCALIN EQUAJIN

I wanted to create an equation with the following outputs:

1 ---> .0078125
2 ---> .015625
3 ---> .03125
4 ---> .0625
5 ---> .125
6 ---> .25
7 ---> .5
8 ---> 1
9 ---> 2
10 ---> 4
11 ---> 8
12 ---> 16
13 ---> 32
14 ---> 64
15 ---> 128

This is the equation that will do that:

    2^(X - 8)*-1

Or, in Javascript:

    Math.pow(2, ((upperLimit-8)*-1)

For some reason, I wanted an input of 8 to spit out the number one.
Since the purpose of this equation is scaling, I don't know why I wanted this.
It seems that a may appropriate number that spits out a 1 would be one of then
following:
--The zoom level the gif is closest to it's original dimensions
--The zoom level in the middle, 11
--The zoom level that the map defaults to, 14

I like the last one the most;

    2^(X - 14)*-1

At 14, the default zoom, this comes out to 1, creating this:

07 ---> .0078125
08 ---> .015625
09 ---> .03125
10 ---> .0625
11 ---> .125
12 ---> .25
13 ---> .5
14 ---> 1
15 ---> 2
16 ---> 4
17 ---> 8
18 ---> 16
19 ---> 32
20 ---> 64
21 ---> 128

*/
