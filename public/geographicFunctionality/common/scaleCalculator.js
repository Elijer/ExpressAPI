var scaleCalculator = function(zoomLvl){

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
    //var display;

    if (zoomLvl >= closest){
      var scalingCoefficient = Math.pow(2, ((closest-oneOne)*-1));
            //display = true;
    } else if (zoomLvl <= farthest) {
      //var scalingCoefficient = Math.pow(2, ((farthest-oneOne)*-1));
      scalingCoefficient = 300; //this is about as small as they go
            //display = false;
      //markerInstance.setVisible(false);
      //scalingCoefficient = 1000; //this is about as small as they go
      //I should really replace them with static images at this point though.
    } else {
            //display = true;
      var scalingCoefficient = Math.pow(2, ((zoomLvl-oneOne)*-1));
    };

    /*
    if (!display){
      markerInstance.setVisible(false);
    } else {
      markerInstance.setVisible(true);
      */
  return scalingCoefficient;
}

module.exports = scaleCalculator;
