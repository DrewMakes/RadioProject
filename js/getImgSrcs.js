// log warnings or not
let logWarnings = true;
var getImgSrcs = function(track) {
  let allImgsToDisplay = [];

  var getSong = function(trackSongId) {
    var song = songTbl.filter(song => song.songId === track.songId);
    // Oops, songTbl[...].songId is used twice resulting in an array with 2 or more song objects
    if (song.length > 1) {
      console.error(
        "songTbl has more than one object for " + track.songId + " !!!"
      );
    }
    // if song object(s) exist, return (hopefully) the only song object in array
    return song.length >= 1
      ? song[0]
      : console.error("songTbl is missing songId " + track.songId);
  };
  console.log("\n////// track type: " + track.type + " ////////");
  //-----------------------------------------
  // print any survey src paths
  //-----------------------------------------
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  var currentDate = new Date();
  currentDate =
    monthNames[currentDate.getMonth()] + " " + currentDate.getDate().toString();
  // get array of survey obj that match todays date.
  var surveyImagesForToday = surveyImageTbl.filter(
    surveyImgObj => surveyImgObj.date === currentDate && track.type === "song"
  );
  // check if any survey's for today exist
  if (surveyImagesForToday.length < 1) {
    consoleWarning("no survey for " + currentDate);
  } else {
    // survey object does exist
    // get array of survey's that match track station
    var surveyStationImagesForToday = surveyImagesForToday.filter(
      surveyImgObj => surveyImgObj.station === track.station
    );
    // if some amount of survey objects match track's station
    if (surveyStationImagesForToday.length >= 1) {
      surveyImagesForToday = surveyStationImagesForToday;
    } else {
    }
    allImgsToDisplay.push(getRandomArrayItem(surveyImagesForToday));
  }

  //-----------------------------------------
  // print any song disc & sleeve src paths
  //-----------------------------------------

  if (track.songId != null) {
    var song = getSong(track.songId);
    // display song title and artist
    console.log("TITLE: " + song.title, "ARTIST: " + song.artist);
    // query song images
    var songImages = songImageTbl.filter(
      songImage => songImage.songId === track.songId
    );
    // Maybe a better way to do this is a unique Id check on all the data at once rather than real-time errors like this. Dunno
    if (songImages.length > 1) {
      console.error(
        "songImageTbl has more than one object for " + track.songId + " !!!"
      );
    }
    // if image objects exists, grab (hopefully) the only item in array
    songImages =
      songImages.length >= 1
        ? songImages[0]
        : consoleWarning("no Disk or Sleeve images for " + song.title);
    // if images object exists
    if (songImages != undefined) {
      // if sleeves array has a photo
      songImages.srcSleeve.length >= 1
        ? allImgsToDisplay.push(...songImages.srcSleeve)
        : consoleWarning("no Sleeve images for song: " + song.title);
      // if disc array has a photo
      songImages.srcDisc.length >= 1
        ? allImgsToDisplay.push(...songImages.srcDisc)
        : consoleWarning("no Disk images for song: " + song.title);
    }
  } else {
    if (track.type === "song") {
      console.error("This song does not have a songId !!!");
    }
  }

  //-----------------------------------------
  // print any artist src paths
  //-----------------------------------------
  if (track.songId != null) {
    var song = getSong(track.songId);
    var artistImages = artistImageTbl.filter(
      artist => artist.name === song.artist
    );
    if (artistImages.length > 1) {
      console.error(
        "artistImageTbl has more than one object for " + song.artist + " !!!"
      );
    }
    // if image objects exists, grab (hopefully) the only item in array
    artistImages =
      artistImages.length >= 1
        ? artistImages[0]
        : consoleWarning("no artist object for " + song.artist);
    // if artist object exists
    if (artistImages != undefined) {
      // if src array has a photo
      artistImages.src.length >= 1
        ? allImgsToDisplay.push(...artistImages.src)
        : consoleWarning("no artist images for " + song.artist);
    }
  }

  //-----------------------------------------
  // print any dj src paths
  //-----------------------------------------
  if (track.dj != null) {
    var djImages = djImageTbl.filter(dj => dj.name === track.dj);
    if (djImages.length > 1) {
      console.error(
        "djImageTbl has more than one object for " + track.dj + " !!!"
      );
    }
    // if dj objects exists, grab (hopefully) the only item in array
    djImages =
      djImages.length >= 1
        ? djImages[0]
        : consoleWarning("no dj objects for " + track.dj);
    // if dj object exists
    if (djImages != undefined) {
      // if src array has a photo
      djImages.src.length >= 1
        ? allImgsToDisplay.push(...djImages.src)
        : consoleWarning("no dj images for " + track.dj);
    }
  } else {
    //consoleWarning("no dj for trackId:"+track.trackId);
  }

  //-----------------------------------------
  // print any station src paths
  //-----------------------------------------
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
    stationImages =
      stationImages.length >= 1
        ? stationImages[0]
        : consoleWarning("no station objects for " + track.station);
    // if station object exists
    if (stationImages != undefined) {
      // if src array has a photo
      stationImages.src.length >= 1
        ? allImgsToDisplay.push(...stationImages.src)
        : consoleWarning("no station images for " + track.station);
    }
  } else {
    consoleWarning(
      "no station images for this track, trackTbl[...].station = null"
    );
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var totalImages = allImgsToDisplay.length;
  // console.log("ALL IMAGES: ", allImgsToDisplay);
  // shuffel Artist images and DJ/Station images
  allImgsToDisplay = shuffle(allImgsToDisplay);
  // get three images from total
  allImgsToDisplay = allImgsToDisplay.slice(0, 3);

  // if there is a survey img in final 3 images, move it to the front
  // survey gets priority placement on the page
  if (allImgsToDisplay.filter(img => typeof img === "object").length > 0) {
    var index = allImgsToDisplay.indexOf(
      allImgsToDisplay.filter(img => typeof img === "object")[0]
    );
    // remove survey obj from index
    var surveyObj = allImgsToDisplay.splice(index, 1)[0];
    // add back survey as the first img in Array
    allImgsToDisplay.unshift(surveyObj.src);
  }
  // console.log(
  //   "FINAL " + allImgsToDisplay.length + " IMAGE(S) of " + totalImages,
  //   allImgsToDisplay
  // );
  return allImgsToDisplay;
};

function consoleWarning(msg) {
  if (logWarnings) {
    console.warn("WARNING: " + msg);
  }
}

var getRandomArrayItem = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};
