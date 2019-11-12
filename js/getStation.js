var getStation = function(track) {
  if (track.station != null) {
    var stationImages = stationImageTbl.filter(
      station => station.name === track.station
    );
    if (stationImages.length > 1) {
      console.error(
        "stationImageTbl has more than one object for " + track.station + " !!!"
      );
    }
    // if station objects exists, grab (hopefully) the only item in array
    return stationImages.length >= 1
      ? stationImages[0]
      : consoleWarning("no station objects for " + track.station);
  }
};
