// Live Server VSCode extention lets modules work in chrome.
import { trackTbl } from "./trackData_fake.js";
import {
  songTbl,
  artistTbl,
  djTbl,
  stationTbl,
  newsImage
} from "./trackMetaData_fake.js";

// when the page is loaded,
(function() {
  // generated playlist
  var playlistData = [7, 3, 1, 5, 2, 6, 4, 0];
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
      if (index == 0) {
        var initialTrack = getInitialTrackToPlay(); // get current song index + secOffset within song
        index = initialTrack.index;
        secOffset = initialTrack.secOffset;
      }

      let trackId = playlist[index];
      let track = trackTbl[trackId];

      //check if trackId is the same as array index
      if (trackId != track.trackId) {
        console.error(
          "TYPO ERROR in TABLE DATA:: check for typo in trackTbl[" +
            trackId +
            "].trackId 'trackId' is " +
            track.trackId +
            " and should be " +
            trackId +
            "."
        );
      }

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
      if (audio === audio1) {
        console.log("index:" + index, track.src, "(audio1)");
      } else {
        console.log("index:" + index, track.src, "(audio2)");
      }
      // if song
      if (track.songId != null) {
        let song = songTbl[track.songId];
        let artist = artistTbl[song.artistId];
        // check if artist names match in songTbl and artistTbl
        if (song.artist != artist.name) {
          console.error(
            "TYPO ERROR in songTbl or artistTbl:: song.artist= " +
              song.artist +
              " should be the same as artist.name= " +
              artist.name
          );
        }
        //TODO Display song data
        console.log(
          "DISPLAY SONG INFO:",
          song.title,
          song.artist,
          artist.sleeves,
          artist.records,
          artist.headshots
        );
      }
      // if dj
      if (track.djId != null) {
        let dj = djTbl[track.djId];
        //TODO Display dj data
        console.log("DISPLAY DJ INFO:", dj.name, dj.headshots);
      }
      // if station
      if (track.stationId != null) {
        let station = stationTbl[track.stationId];
        // TODO Display station data
        console.log("DISPLAY STATION INFO:", station.name, station.photos);
      }
      if (track.type === "news") {
        console.log("DISPLAY::" + newsImage);
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
      var dur = trackTbl[playlist[i]].dur;
      var outtro = trackTbl[playlist[i]].outtro;
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
