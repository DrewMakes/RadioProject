// when the page is loaded,
(function() {
  // playlistData are the tracks to be played in order in trackTbl,
  // referenced by trackId
  var playlistData = [
    { trackId: 9 },
    { trackId: 69 },
    { trackId: 64 },
    { trackId: 1223 },
    { trackId: 1369 },
    { trackId: 1030 },
    { trackId: 31 },
    { trackId: 10 }
  ];
  //  the tracks are muted
  var audio1 = new Audio();
  audio1.muted = true;
  var audio2 = new Audio();
  audio2.muted = true;
  // time elapsed since page load
  var timeAtLoad = new Date();
  // song index intialized
  let index = 0;

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
      // get real index and time offset
      if (index === 0) {
        var firstTrackId = playlist[index].trackId;
        var firstTrack = trackTbl.filter(
          track => track.trackId === firstTrackId
        )[0];
        var firstDur = firstTrack.dur;
        var firstOuttro = firstTrack.outtro;
        var initialTrack = getInitialTrackToPlay(firstDur, firstOuttro); // get current song index + secOffset within song
        index = initialTrack.index;
        secOffset = initialTrack.secOffset;
      }
      // track
      var trackId = playlist[index].trackId;
      var track = trackTbl.filter(track => track.trackId === trackId)[0];
      var dur = track.dur;
      var outtro = track.outtro;

      audio.src = track.src + "#t=" + secOffset;
      var dur = getTrackDuration(dur, outtro) - secOffset * 1000;
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
      var getSong = function(trackSongId) {
        var song = songTbl.filter(song => song.songId === track.songId);
        // Oops, songTbl[...].songId is used twice resulting in an array with 2 or more song objects
        if (song.length > 1) {
          console.error(
            "TYPO ERROR:: songTbl[...] has two song objects with the same songId=" +
              track.songId +
              " program only uses the first object, all others ignored."
          );
        }
        // if song object(s) exist, return (hopefully) the only song object in array
        return song.length >= 1
          ? song[0]
          : console.error(
              "songTbl is missing an object in its array. songTbl[...].songId=" +
                track.songId +
                " doesn't exist"
            );
      };
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
      var surveyImagesForToday = surveyImageTbl.filter(
        surveyImg => surveyImg.date === currentDate
      );

      // Oops, surveyImageTbl[...].date is used twice resulting in an array with 2 or more objects
      // Maybe a better way to do this is a unique Id check on all the data at once rather than real-time errors like this. Dunno
      if (surveyImagesForToday.length > 1) {
        console.error(
          "TYPO ERROR:: surveyImageTbl[...] has two objects with the same date=" +
            currentDate +
            " program only uses the first day found, all others ignored."
        );
      }
      // if a surveyImagesForToday object(s) exist, grab (hopefully) the only item in array
      var surveyImagesForToday =
        surveyImagesForToday.length >= 1
          ? surveyImagesForToday[0]
          : console.error("today's date has no object in surveyImageTbl");

      // if survey image day object exists
      if (surveyImagesForToday != undefined) {
        // if day object's array of survey images has images
        surveyImagesForToday.src.length >= 1
          ? //choose a random survey image from src array
            console.log(
              "RANDOM SURVEY IMAGE: ",
              getRandomArrayItem(surveyImagesForToday.src)
            )
          : console.error("there are no survey images for this day");
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
        // Oops, songImageTbl[...].songId is used twice resulting in an array with 2 or more objects
        // Maybe a better way to do this is a unique Id check on all the data at once rather than real-time errors like this. Dunno
        if (songImages.length > 1) {
          console.error(
            "TYPO ERROR:: songImageTbl[...] has two objects with the same songId=" +
              track.songId +
              " program only uses the first object, all others ignored."
          );
        }
        // if image objects exists, grab (hopefully) the only item in array
        songImages =
          songImages.length >= 1
            ? songImages[0]
            : console.error(
                "no song images for this track. songImageTbl[...].songId=" +
                  track.songId +
                  " doesn't exist"
              );
        // if images object exists
        if (songImages != undefined) {
          // if sleeves array has a photo
          songImages.srcSleeve.length >= 1
            ? console.log(
                "RANDOM SLEEVE IMAGE",
                getRandomArrayItem(songImages.srcSleeve)
              )
            : console.error(
                " no sleeve images in songImageTbl[...].songId=" + track.songId
              );
          // if disc array has a photo
          songImages.srcDisc.length >= 1
            ? console.log(
                "RANDOM DISK IMAGE",
                getRandomArrayItem(songImages.srcDisc)
              )
            : console.error(
                "no disc images in songImageTbl[...].songId=" + track.songId
              );
        }
      }

      //-----------------------------------------
      // print any artist src paths
      //-----------------------------------------
      if (track.songId != null) {
        var song = getSong(track.songId);
        // display song title and artist
        var artistImages = artistImageTbl.filter(
          artist => artist.name === song.artist
        );
        if (artistImages.length > 1) {
          console.error(
            "TYPO ERROR:: artistImageTbl[...] has two objects with the same artist name=" +
              song.artist +
              " program only uses the first object, all others ignored."
          );
        }

        // if image objects exists, grab (hopefully) the only item in array
        artistImages =
          artistImages.length >= 1
            ? artistImages[0]
            : console.error(
                "no artist objects for this track. artistImageTbl[...].name=" +
                  song.artist +
                  " doesn't exist"
              );
        // if artist object exists
        if (artistImages != undefined) {
          // if src array has a photo
          artistImages.src.length >= 1
            ? console.log(
                "RANDOM ARTIST IMAGE:",
                getRandomArrayItem(artistImages.src)
              )
            : console.error(
                " no artist images in artistImageTbl[...].name=" + song.artist
              );
        }
      }
      //-----------------------------------------
      // print any dj src paths
      //-----------------------------------------

      //-----------------------------------------
      // print any station src paths
      //-----------------------------------------
    }
    // Returns the index of the initial track to play and the offset,
    // in seconds, of where to start playing the track.
    // index is returned as -1 if an inital track can't be found.
    var getInitialTrackToPlay = function(dur, outtro) {
      var now = new Date();
      var msDif = now.getTime() - timeAtLoad.getTime();
      var i = 0;
      while (i < playlist.length) {
        var trackDur = getTrackDuration(dur, outtro);
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
    var getTrackDuration = function(dur, outtro) {
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
