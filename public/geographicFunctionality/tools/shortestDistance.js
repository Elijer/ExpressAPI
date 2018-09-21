var shortestDistance = function (longitude1, longitude2) {
	longDif = Math.abs(longitude1 - longitude2) % 360;
  finalLong = longDif < 180 ? longDif : 360 - longDif;
  return finalLong;
}

module.exports = shortestDistance;
