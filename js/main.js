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
  var audio2 = new Audio();
  let playStatus = false;
  var clickSound = new Audio();
  clickSound.src = "tracks/radio click.mp3";
  // time elapsed since page load
  var timeAtLoad = new Date();
  // track index intialized
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

      // collect array of src img URL's for this track
      var arrayofImgSrc = getImgSrcs(track);
      // wait to get height&width for each img
      awaitAll(arrayofImgSrc, getHeightWidth).then(imgList => {
        displayUi(imgList, track);
      });
      index += 1;
    };

    function getHeightWidth(imgSrc) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () =>
          resolve({
            src: img.src,
            height: img.height,
            width: img.width
          });
        img.onerror = reject;
        img.src = imgSrc;
      });
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

  var imgDivs = ["a", "b", "c", "d", "e"];
  var button = document.getElementById("playButton");
  button.addEventListener(
    "click",
    function(e) {
      playStatus = !playStatus;
      if (!playStatus) {
        audio1.volume = 1;
        audio2.volume = 1;
        adjustVolume(audio1, 0);
        adjustVolume(audio2, 0).then(() => {
          clickSound.play();
        });
        document.getElementsByClassName("needle")[0].classList.remove("onAnim");
        document.getElementsByClassName("needle")[0].classList.add("offAnim");
        imgDivs.forEach(div => {
          document.getElementsByClassName(div)[0].style.visibility = "hidden";
        });
      } else {
        clickSound.play();
        audio1.volume = 0;
        audio2.volume = 0;
        adjustVolume(audio1, 1);
        adjustVolume(audio2, 1);
        document
          .getElementsByClassName("needle")[0]
          .classList.remove("offAnim");
        document.getElementsByClassName("needle")[0].classList.add("onAnim");
        imgDivs.forEach(div => {
          document.getElementsByClassName(div)[0].style.visibility = "visible";
        });
        if (index == 0) {
          Mp3Queue(audio1, audio2, playlistData);
        }
      }
    },
    false
  );
})();
