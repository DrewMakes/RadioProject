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
    date: "Jan 2",
    src: [
      "images/surveys/CHUM_1971-01-02_2.jpg",
      "images/surveys/1971Jan02WABCSurvey.jpg"
    ]
  },
  {
    date: "Feb 16",
    src: [
      "images/surveys/CHUM_1971-02-16_2.jpg",
      "images/surveys/WLSFeb16-71Survey.jpg"
    ]
  }
];

var songImageTbl = [
  // these images are pics of a record disc or its sleeve
  // and are shown when that song is playing
  {
    songId: 15,
    srcSleeve: [
      "images/sleeves/Domino sleeve.jpg",
      "images/sleeves/Domino sleeve UK.jpg"
    ],
    srcDisc: ["images/singles/Domino vinyl.jpg"]
  },
  {
    songId: 150,
    srcSleeve: [],
    srcDisc: ["images/singles/Bring the Boys Home vinyl.jpg"]
  }
];

var artistImageTbl = [
  // these images are pics of the band, independent of one of their songs.
  // these pics can be shown when any song of theirs is playing
  {
    name: "King Floyd",
    src: []
  },
  {
    name: "Badfinger",
    src: []
  },
  {
    name: "Freda Payne",
    src: [
      "images/artists/Freda_Payne_001.jpg",
      "images/artists/F_Payne_in_concert.jpg"
    ]
  },
  {
    name: "Simon & Garfunkel",
    src: []
  },
  {
    name: "Van Morrison",
    src: ["images/artists/Van_the_Man_001.jpg"]
  }
];

var djImageTbl = [
  // shown when this DJ is talking on a song, ad, etc
  {
    name: "Dan Ingram",
    src: ["images/dj/Dan_Ingram_Mess.jpg"]
  },
  {
    name: "Ron Sherwood",
    src: ["images/dj/Ron_Sherwood_1.jpg"]
  },
  {
    name: "Bob Hardt",
    src: ["images/dj/Bob-Hardt-71.jpg"]
  },
  {
    name: "J Michael Wilson",
    src: ["images/dj/J_Michael_Wilson063.jpg"]
  }
];

var stationImageTbl = [
  // general pics of station, inside & out, unnamed employees or dj's in shot
  // shown when any DJ working at this station is talking, or station jingle
  // is playing
  {
    name: "CHUM",
    src: ["images/station/CHUM_tape_rack.jpg"]
  }
];

var newsImage = "BREAKING RETRO NEWS";
