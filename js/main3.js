// when the page is loaded,
(function() {
  // playlistData are the tracks to be played in order in trackTbl,
  // referenced by trackId
  var playlistData = [
    { trackId: 1030 }, // parking garage
    { trackId: 9 }, // domino
    { trackId: 69 }, //cecilia
    { trackId: 64 }, // band of gold
    { trackId: 1223 }, // dan ingram thing
    { trackId: 1369 }, // WABC Chime Time
    { trackId: 31 }, // no matter what
    { trackId: 10 } // groove me
  ];
  //  the tracks are muted
  var audio1 = new Audio();
  audio1.muted = true;
  var audio2 = new Audio();
  audio2.muted = true;
  // time elapsed since page load
  var timeAtLoad = new Date();
  // track index intialized
  let index = 0;
  // log warnings or not
  let logWarnings = true;

  var Mp3Queue = function(audio1, audio2, playlist) {
    console.log("Main func start");
    if (!audio1 || !audio1.tagName || audio1.tagName !== "AUDIO")
      throw "Invalid audio element1";
    if (!audio2 || !audio2.tagName || audio2.tagName !== "AUDIO")
      throw "Invalid audio element2";
    if (!playlist || !playlist.length) throw "Invalid playlist array";

    // Looping function
    var playNextTrack = function(audio) {
      if (index >= playlist.length) {
        button.disabled = true;
        return;
      }
      var secOffset = 0.0;
      // first press of play btn
      if (index === 0) {
        var initialTrack = getInitialTrackToPlay(); // get current track index + secOffset within track
        index = initialTrack.index;
        secOffset = initialTrack.secOffset;
      }
      // track
      var trackId = playlist[index].trackId;
      var track = trackTbl.filter(track => track.trackId === trackId)[0];

      audio.src = track.src + "#t=" + secOffset;
      var dur = getTrackDuration(index) - secOffset * 1000;
      if (audio === audio1) {
        setTimeout(function() {
          playNextTrack(audio2);
        }, dur);
      } else {
        setTimeout(function() {
          playNextTrack(audio1);
        }, dur);
      }
      audio.play();
      // if (audio === audio1) {
      //   console.log("index:" + index, track.trackId, track.src, "(audio1)");
      // } else {
      //   console.log("index:" + index, track.trackId, track.src, "(audio2)");
      // }
      displayImages(track);
      index += 1;
    };

    function displayImages(track) {
      let surveyImgToDisplay = [];
      let artistImgsToDisplay = [];
      let djStationImgsToDisplay = [];

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
        monthNames[currentDate.getMonth()] +
        " " +
        currentDate.getDate().toString();
      // get array of survey obj that match todays date.
      var surveyImagesForToday = surveyImageTbl.filter(
        surveyImgObj => surveyImgObj.date === currentDate
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
          surveyImagesForToday = getRandomArrayItem(
            surveyStationImagesForToday
          );
        } else {
          // no stations matched, pick any survey for today
          // get any survey regardless of station
          surveyImagesForToday = getRandomArrayItem(surveyImagesForToday);
        }
        // console.log("RANDOM SURVEY IMAGE: ", surveyImagesForToday.src);

        surveyImgToDisplay.push(surveyImagesForToday.src);
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
            ? artistImgsToDisplay.push(getRandomArrayItem(songImages.srcSleeve))
            : // ? console.log(
              //     "RANDOM SLEEVE IMAGE",
              //     getRandomArrayItem(songImages.srcSleeve)
              //   )
              consoleWarning("no Sleeve images for song: " + song.title);
          // if disc array has a photo
          songImages.srcDisc.length >= 1
            ? artistImgsToDisplay.push(getRandomArrayItem(songImages.srcDisc))
            : // ? console.log(
              //     "RANDOM DISK IMAGE",
              //     getRandomArrayItem(songImages.srcDisc)
              // )
              consoleWarning("no Disk images for song: " + song.title);
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
            "artistImageTbl has more than one object for " +
              song.artist +
              " !!!"
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
            ? artistImgsToDisplay.push(getRandomArrayItem(artistImages.src))
            : // ? console.log(
              //     "RANDOM ARTIST IMAGE:",
              //     getRandomArrayItem(artistImages.src)
              //   )
              consoleWarning("no artist images for " + song.artist);
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
            ? djStationImgsToDisplay.push(getRandomArrayItem(djImages.src))
            : // ? console.log("RANDOM DJ IMAGE:", getRandomArrayItem(djImages.src))
              consoleWarning("no dj images for " + track.dj);
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
            "stationImageTbl has more than one object for " +
              track.station +
              " !!!"
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
            ? djStationImgsToDisplay.push(getRandomArrayItem(stationImages.src))
            : // ? console.log(
              //     "RANDOM STATION IMAGE:",
              //     getRandomArrayItem(stationImages.src)
              //   )
              consoleWarning("no station images for " + track.station);
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

      // shuffel Artist images and DJ/Station images
      artistImgsToDisplay = shuffle(artistImgsToDisplay);
      djStationImgsToDisplay = shuffle(djStationImgsToDisplay);

      // let totalImgCount =
      //   surveyImgToDisplay.length +
      //   artistImgsToDisplay.length +
      //   djStationImgsToDisplay.length;
      // console.log(totalImgCount + " out of 6 'SLOT TYPES' available");
      let result = [];
      if (surveyImgToDisplay.length === 1) {
        result.push(surveyImgToDisplay[0]);
      }
      // Alternate artist and dj/station images
      var j,
        l = Math.min(artistImgsToDisplay.length, djStationImgsToDisplay.length);

      for (j = 0; j < l; j++) {
        result.push(artistImgsToDisplay[j], djStationImgsToDisplay[j]);
      }
      result.push(
        ...artistImgsToDisplay.slice(l),
        ...djStationImgsToDisplay.slice(l)
      );

      console.log("FINAL IMAGES", result.slice(0, 3));
    }

    function consoleWarning(msg) {
      if (logWarnings) {
        console.warn("WARNING: " + msg);
      }
    }

    // Returns the index of the initial track to play and the offset,
    // in seconds, of where to start playing the track.
    // index is returned as -1 if an inital track can't be found.
    var getInitialTrackToPlay = function() {
      var now = new Date();
      var msDif = now.getTime() - timeAtLoad.getTime();
      var i = 0;
      while (i < playlist.length) {
        var trackDur = getTrackDuration(i);
        if (msDif - trackDur < 0) {
          var secOffset = Math.abs(msDif) / 1000;
          return {
            index: i,
            secOffset: secOffset
          };
        } else {
          msDif -= trackDur;
          i++;
        }
      }
      return {
        index: -1,
        secOffset: 0
      };
    };

    // aka how long to wait before starting the next track
    var getTrackDuration = function(i) {
      var playlistTrackId = playlist[i].trackId;
      var track = trackTbl.filter(
        track => track.trackId === playlistTrackId
      )[0];
      var dur = track.dur;
      var outtro = track.outtro;
      if (outtro !== 0) {
        dur = outtro;
      }
      return dur;
    };

    playNextTrack(audio1); // Start looping function
  };

  var getRandomArrayItem = function(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var button = document.getElementById("playButton");
  button.addEventListener(
    "click",
    function(e) {
      audio1.muted = !audio1.muted;
      audio2.muted = !audio2.muted;
      if (audio1.muted === true) {
        this.textContent = "Play";
      } else {
        this.textContent = "Mute";
        if (index == 0) {
          Mp3Queue(audio1, audio2, playlistData);
        }
      }
    },
    false
  );
})();
