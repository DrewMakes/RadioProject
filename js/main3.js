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
      console.log(track);
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
