var makeFuego           = require('./fuego');
var scaleCalculator     =require('./scaleCalculator');

var scale = function(googleMaps, markerInstance, zoomLvl){
    var scalingCoefficient = scaleCalculator(zoomLvl);
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
