var songTbl = [
  {
    songId: 0,
    title: "Cecilia",
    artist: "Simon & Garfunkel"
  },
  {
    songId: 1,
    title: "Band of Gold",
    artist: "Freda Payne"
  },
  {
    songId: 15,
    title: "Domino",
    artist: "Van Morrison"
  },
  {
    songId: 272,
    title: "Groove Me",
    artist: "King Floyd"
  },
  {
    songId: 274,
    title: "No Matter What",
    artist: "Badfinger"
  }
];

// // Print to console the image src path of each image that makes sense being
// // displayed during the playing of track.
// var displayImages = function(track) {
//   // print any survey src paths
//   // print any song disc & sleeve src paths
//   // print any artist src paths
//   // print any dj src paths
//   // print any station src paths
// };

var surveyImageTbl = [
  // these survey images are shown on the day of year they were published
  {
    date: "Nov 1",
    station: "CHUM",
    src: "images/surveys/CHUM_1971-01-02_2.jpg"
  },
  {
    date: "Nov 1",
    station: "WKXY",
    src: "images/surveys/WKXY_1971-01-02_1.jpg"
  }
];

var songImageTbl = [
  // these images are pics of a record disc or its sleeve
  // and are shown when that song is playing
  {
    songId: 1,
    srcSleeve: [
      "images/sleeves/fredapayne-bandofgold sleeve1.jpg",
      "images/sleeves/fredapayne-bandofgold sleeve2.jpg",
      "images/sleeves/freda-payne_band-of-gold sleeve3.jpg"
    ],
    srcDisc: ["images/singles/freda-payne-band-of-gold vinyl.jpg"]
  },
  {
    songId: 15,
    srcSleeve: [
      "images/sleeves/VAN_MORRISON_DOMINO-sleeve1.jpg",
      "images/sleeves/VAN_MORRISON_DOMINO-sleeve2.jpg",
      "images/sleeves/vanmorrison_domino-sleeve3.jpg",
      "images/sleeves/van-morrison-domino-warner-bros-sleeve.jpg"
    ],
    srcDisc: ["images/singles/Domino vinyl.jpg"]
  },
  {
    songId: 150,
    srcSleeve: [],
    srcDisc: ["images/singles/Bring the Boys Home vinyl.jpg"]
  },
  {
    songId: 272,
    srcSleeve: ["images/sleeves/king_floyd-groove_me_sleeve1.jpg"],
    srcDisc: ["images/singles/king-floyd-groove-me-1970-4.jpg"]
  },
  {
    songId: 274,
    srcSleeve: ["images/sleeves/No_Matter_What_Badfinger sleeve1.jpg"],
    srcDisc: ["images/singles/badfinger-no-matter-what vinyl.jpg"]
  }
];

var artistImageTbl = [
  // these images are pics of the band, independent of one of their songs.
  // these pics can be shown when any song of theirs is playing
  {
    name: "King Floyd",
    src: ["images/artists/king_floyd.jpg"]
  },
  {
    name: "Badfinger",
    src: []
  },
  {
    name: "Freda Payne",
    src: ["images/artists/640px-Freda_Payne_1970.jpg"]
  },
  {
    name: "Simon & Garfunkel",
    src: []
  },
  {
    name: "Badfinger",
    src: []
  },
  {
    name: "Van Morrison",
    src: []
  }
];

var djImageTbl = [
  // shown when this DJ is talking on a song, ad, etc
  {
    name: "Dan Ingram",
    src: [
      "images/dj/Ingram-studio-Fall 1971.jpg",
      "images/dj/dan-ingram-wabc 1.jpg"
    ]
  },
  {
    name: "Ron Sherwood",
    src: ["images/dj/WKNR-09-25-1969-Ron-Sherwood.jpg"]
  },
  {
    name: "Bob Hardt",
    src: ["images/dj/Bob Hardt 3-72-5.jpg"]
  },
  {
    name: "J Michael Wilson",
    src: ["images/dj/chum-jmwilson.gif"]
  }
];

var stationImageTbl = [
  // general pics of station, inside & out, unnamed employees or dj's in shot
  // shown when any DJ working at this station is talking, or station jingle
  // is playing
  {
    name: "CHUM",
    src: ["images/stations/1050chum-rainbow-1971.jpg"]
  },
  {
    name: "WABC",
    src: ["images/stations/WABC-Lobby 1971.jpg"]
  },
  {
    name: "WKNR",
    src: []
  }
];
