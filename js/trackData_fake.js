// name - name of track (unused)
// src - path to track (mp3)
// dur - length of track (ms)
// outtro - length of track until start of fade (ms). 0 if no fade

export var trackTbl = [
  {
    // trackId not really needed for code? Visual representaion of index only
    trackId: 0, // start at 0 index
    name: "Domino - Van Morrison WKNR",
    type: "song",
    songId: 0,
    src: "tracks/songs/Dubbed/Domino - Van Morrison WKNR.mp3",
    djId: null,
    stationId: null,
    dur: 21048,
    outtro: 0
  },
  {
    trackId: 1,
    name: "Cecilia - Simon & Garfunkel",
    type: "song",
    songId: 1,
    src: "tracks/songs/HQ/Cecilia - Simon & Garfunkel.mp3",
    djId: null,
    stationId: null,
    dur: 16608,
    outtro: 0
  },
  {
    trackId: 2,
    name: "Band of Gold - Freda Payne",
    type: "song",
    songId: 2,
    src: "tracks/songs/HQ/Band of Gold - Freda Payne.mp3",
    djId: null,
    stationId: null,
    dur: 21263,
    outtro: 19552
  },
  {
    trackId: 3,
    name: "Dan Ingram thing",
    type: "weather",
    songId: null,
    src: "tracks/Dan Ingram thing.mp3",
    djId: 0,
    stationId: null,
    dur: 4389,
    outtro: 0
  },
  {
    trackId: 4,
    name: "WABC Chime Time",
    type: "jingle",
    songId: null,
    src: "tracks/WABC Chime Time.mp3",
    djId: null,
    stationId: 0,
    dur: 3384,
    outtro: 2320
  },
  {
    trackId: 5,
    name: "parking garage workers on strike",
    type: "news",
    songId: null,
    src: "tracks/parking garage workers on strike.mp3",
    djId: null,
    stationId: null,
    dur: 7344,
    outtro: 0
  },
  {
    trackId: 6,
    name: "No Matter What",
    type: "song",
    songId: 3,
    src: "tracks/songs/HQ/No Matter What - Badfinger.mp3",
    djId: null,
    stationId: null,
    dur: 21168,
    outtro: 19656
  },
  {
    trackId: 7,
    name: "Groove Me - King Floyd CHUM",
    type: "song",
    songId: 4,
    src: "tracks/songs/Dubbed/Groove Me - King Floyd CHUM.mp3",
    djId: null,
    stationId: null,
    dur: 19200,
    outtro: 0
  }
];
