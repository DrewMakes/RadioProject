// pure javascript
(function() {
    var Mp3Queue = function(audioEle1, audioEle2, tracks) {
        console.log("got here");
        if(!audioEle1 || !audioEle1.tagName || audioEle1.tagName !== 'AUDIO')throw 'Invalid audio element1';
        if(!audioEle2 || !audioEle2.tagName || audioEle2.tagName !== 'AUDIO')throw 'Invalid audio element2';
        if(!tracks || !tracks.length)throw 'Invalid tracks array';        
        
        var playNextEle1 = function() {
            console.log("in playNextEle1");
            var audio = audioEle1;
	    var secOffset = 0.0;
            if (index == 0) {
                var initialTrack = getInitialTrackToPlay();
		index = initialTrack.index;
		secOffset = initialTrack.secOffset;
	    }
            if (index < tracks.length) {
                audio.src = tracks[index].src+"#t="+secOffset;
                var dur = getTrackDuration(index)-(secOffset*1000);
                setTimeout(function() {playNextEle2()}, dur);
                audio.play();
                index += 1;
            } else {
                button.disabled = true;
            }
        };

        var playNextEle2 = function() {
            console.log("in playNextEle2");
            var audio = audioEle2;
            if (index < tracks.length) {
                audio.src = tracks[index].src;
                var dur = getTrackDuration(index);
                setTimeout(function() {playNextEle1()}, dur);
                audio.play();
                index += 1;
            } else {
                button.disabled = true;
            }
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
	}

        // aka how long to wait before starting the next track
        var getTrackDuration = function(i) {
            var dur = tracks[i].dur;
            var outtro = tracks[i].outtro;
            if (outtro !== 0) {
                dur = outtro;
            }
            return dur;
        }

        playNextEle1();
    };
 
    var timeAtLoad = new Date();

    var button = document.getElementById("playButton");
    button.addEventListener("click",function(e){
        var audio1 = audioEle1;
        audio1.muted = !audio1.muted;
        var audio2 = audioEle2;
        audio2.muted = !audio2.muted;
        if (audio1.muted === true) {
            this.textContent = 'Play';
        } else {
            this.textContent = 'Mute';
            if (index == 0) {
    	        Mp3Queue(audioEle1, audioEle2, programData);
	    }
        }
    },false);

    // when the page is loaded, the tracks play but are muted
    var audioEle1 = document.getElementById('audioId1');
    audioEle1.muted = true;
    var audioEle2 = document.getElementById('audioId2');
    audioEle2.muted = true;

    var index = 0;

    // dur - length of track (ms)
    // outtro - length of track until start of fade (ms). 0 if no fade
    var programData = [
                  {"name":"Band of Gold - Freda Payne","src":"tracks/Band of Gold - Freda Payne.mp3","dur":21263,"outtro":19552},
                  {"name":"Dan Ingram thing","src":"https://docs.google.com/uc?export&id=1k6oDgptW4QGhHTVMtWPwvMjQ2IrkN2DI","dur":4389,"outtro":0},
                  {"name":"WABC Chime Time","src":"https://docs.google.com/uc?export&id=18svt957rvxO_J-xj5PgS9ebQLERxPFVz","dur":3384,"outtro":2320},
                  {"name":"parking garage workers on strike","src":"https://docs.google.com/uc?export&id=14sOy7t-ylF7PvdxNQrJ8VBqE7N9ed53O","dur":7344,"outtro":0}
                 ];
})();
