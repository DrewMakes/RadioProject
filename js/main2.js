// this is pure javascript
// improved over main.js

// name - name of track (unused)
// src - path to track (mp3)
// dur - length of track (ms)
// outtro - length of track until start of fade (ms). 0 if no fade
import { trackTbl } from "./trackData_fake.js";
var trackData = [4, 3, 1, 5, 2, 6, 7, 8];

// var trackData = [
//   {
//     name: "Domino",
//     src: "tracks/songs/Dubbed/Domino - Van Morrison WKNR.mp3",
//     dur: 21048,
//     outtro: 0
//   },
//   {
//     name: "Cecilia",
//     src: "tracks/songs/HQ/Cecilia - Simon & Garfunkel.mp3",
//     dur: 16608,
//     outtro: 0
//   },
//   {
//     name: "Band of Gold - Freda Payne",
//     src: "tracks/songs/HQ/Band of Gold - Freda Payne.mp3",
//     dur: 21263,
//     outtro: 19552
//   },
//   {
//     name: "Dan Ingram thing",
//     src: "tracks/Dan Ingram thing.mp3",
//     dur: 4389,
//     outtro: 0
//   },
//   {
//     name: "WABC Chime Time",
//     src: "tracks/WABC Chime Time.mp3",
//     dur: 3384,
//     outtro: 2320
//   },
//   {
//     name: "parking garage workers on strike",
//     src: "tracks/parking garage workers on strike.mp3",
//     dur: 7344,
//     outtro: 0
//   },
//   {
//     name: "No Matter What",
//     src: "tracks/songs/HQ/No Matter What - Badfinger.mp3",
//     dur: 21168,
//     outtro: 19656
//   },
//   {
//     name: "Groove Me - King Floyd",
//     src: "tracks/songs/Dubbed/Groove Me - King Floyd CHUM.mp3",
//     dur: 19200,
//     outtro: 0
//   }
// ];

(function() {
  // when the page is loaded, the tracks are muted
  var audio1 = new Audio();
  audio1.muted = true;
  var audio2 = new Audio();
  audio2.muted = true;
  // time elapsed since page load
  var timeAtLoad = new Date();
  //song index intialized
  var index = 0;

  var Mp3Queue = function(audio1, audio2, tracks) {
    console.log("Main func start");
    if (!audio1 || !audio1.tagName || audio1.tagName !== "AUDIO")
      throw "Invalid audio element1";
    if (!audio2 || !audio2.tagName || audio2.tagName !== "AUDIO")
      throw "Invalid audio element2";
    if (!tracks || !tracks.length) throw "Invalid tracks array";

    // Looping function
    var playNextTrack = function(audio) {
      if (index >= tracks.length) {
        button.disabled = true;
        return;
      }
      var secOffset = 0.0;
      // first press of play btn
      if (index == 0) {
        var initialTrack = getInitialTrackToPlay(); // get current song index + secOffset within song
        index = initialTrack.index;
        secOffset = initialTrack.secOffset;
      }
      audio.src = trackTbl[tracks[index]].src + "#t=" + secOffset;
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
      if (audio === audio1) {
        console.log("index:" + index, trackTbl[tracks[index]].src, "(audio1)");
      } else {
        console.log("index:" + index, trackTbl[tracks[index]].src, "(audio2)");
      }

      index += 1;
    };

    // Returns the index of the initial track to play and the offset,
    // in seconds, of where to start playing the track.
    // index is returned as -1 if an inital track can't be found.
    var getInitialTrackToPlay = function() {
      var now = new Date();
      var msDif = now.getTime() - timeAtLoad.getTime();
      var i = 0;
      while (i < tracks.length) {
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
      var dur = trackTbl[tracks[i]].dur;
      var outtro = trackTbl[tracks[i]].outtro;
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
          Mp3Queue(audio1, audio2, trackData);
        }
      }
    },
    false
  );
})();
