/*
var songStore = db.transaction([STORE], "readwrite").objectStore(STORE); 
for (i = 0; i < songTbl.length; i++) { 
    songStore.put(data[i]);
}
*/

var surveyTbl =
[
  {
    "surveyId": 1,
    "name": "WABC Music Power Survey"
  }
]

var songTbl =
[
  {
    "songId": 1,
    "title": "Knock Three Times",
    "artist": "Dawn"
  },
  {
    "songId": 2,
    "title": "My Sweet Lord",
    "artist": "George Harrison"
  },
  {
    "songId": 3,
    "title": "I Think I Love You",
    "artist": "The Partridge Family"
  },
  {
    "songId": 4,
    "title": "One Less Bell to Answer",
    "artist": "The 5th Dimension"
  },
  {
    "songId": 5,
    "title": "Stoned Love",
    "artist": "The Supremes"
  },
  {
    "songId": 6,
    "title": "The Tears of a Clown",
    "artist": "Smokey Robinson & the Miracles"
  },
  {
    "songId": 7,
    "title": "Pay to the Piper",
    "artist": "The Chairmen of the Board"
  },
  {
    "songId": 8,
    "title": "Black Magic Woman",
    "artist": "Santana"
  },
  {
    "songId": 9,
    "title": "River Deep - Mountain High",
    "artist": "The Supremes & the Four Tops"
  },
  {
    "songId": 10,
    "title": "Your Song",
    "artist": "Elton John"
  },
  {
    "songId": 11,
    "title": "Does Anybody Really Know What Time It Is?",
    "artist": "Chicago"
  },
  {
    "songId": 12,
    "title": "Gypsy Woman",
    "artist": "Brian Hyland"
  },
  {
    "songId": 13,
    "title": "If I Were Your Woman",
    "artist": "Gladys Knight & the Pips"
  },
  {
    "songId": 14,
    "title": "It's Impossible",
    "artist": "Perry Como"
  },
  {
    "songId": 15,
    "title": "Domino",
    "artist": "Van Morrison"
  },
  {
    "songId": 16,
    "title": "Montego Bay",
    "artist": "Bobby Bloom"
  },
  {
    "songId": 17,
    "title": "One Man Band",
    "artist": "Three Dog Night"
  },
  {
    "songId": 18,
    "title": "Stoney End",
    "artist": "Barbra Streisand"
  },
  {
    "songId": 19,
    "title": "Remember Me",
    "artist": "Diana Ross"
  },
  {
    "songId": 20,
    "title": "Lonely Days",
    "artist": "The Bee Gees"
  },
  {
    "songId": 21,
    "title": "Games",
    "artist": "Redeye"
  },
  {
    "songId": 22,
    "title": "Immigrant Song",
    "artist": "Led Zeppelin"
  },
  {
    "songId": 23,
    "title": "Love the One You're With",
    "artist": "Stephen Stills"
  },
  {
    "songId": 24,
    "title": "Superstar",
    "artist": "Murray Head with the Trinidad Singers"
  },
  {
    "songId": 25,
    "title": "Mother",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 26,
    "title": "Hold On",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 27,
    "title": "Have You Ever Seen the Rain",
    "artist": "Creedence Clearwater Revival"
  },
  {
    "songId": 28,
    "title": "Molina",
    "artist": "Creedence Clearwater Revival"
  },
  {
    "songId": 29,
    "title": "Hey Tonight",
    "artist": "Creedence Clearwater Revival"
  },
  {
    "songId": 30,
    "title": "Black Magic Woman/Gypsy Queen",
    "artist": "Santana"
  },
  {
    "songId": 36,
    "title": "Rose Garden",
    "artist": "Lynn Anderson"
  },
  {
    "songId": 37,
    "title": "Born to Wander",
    "artist": "Rare Earth"
  },
  {
    "songId": 38,
    "title": "One Bad Apple",
    "artist": "The Osmonds"
  },
  {
    "songId": 39,
    "title": "Just Seven Numbers (Can Straighten Out My Life)",
    "artist": "The Four Tops"
  },
  {
    "songId": 40,
    "title": "I Don't Know How to Love Him",
    "artist": "Yvonne Elliman"
  },
  {
    "songId": 41,
    "title": "Only Love Can Break Your Heart",
    "artist": "Neil Young"
  },
  {
    "songId": 42,
    "title": "Get Up, Get Into It, Get Involved Pt. 1",
    "artist": "James Brown"
  },
  {
    "songId": 43,
    "title": "Don't Let the Green Grass Fool You",
    "artist": "Wilson Pickett"
  },
  {
    "songId": 44,
    "title": "Watching Scotty Grow",
    "artist": "Bobby Goldsboro"
  },
  {
    "songId": 45,
    "title": "Mama's Pearl",
    "artist": "The Jackson 5"
  },
  {
    "songId": 46,
    "title": "I Hear You Knocking",
    "artist": "Dave Edmunds"
  },
  {
    "songId": 47,
    "title": "I Really Don't Want to Know",
    "artist": "Elvis Presley"
  },
  {
    "songId": 48,
    "title": "Country Comfort",
    "artist": "Elton John"
  },
  {
    "songId": 49,
    "title": "Mr. Bojangles",
    "artist": "The Nitty Gritty Dirt Band"
  },
  {
    "songId": 50,
    "title": "If You Could Read My Mind",
    "artist": "Gordon Lightfoot"
  },
  {
    "songId": 51,
    "title": "Let Your Love Go",
    "artist": "Bread"
  },
  {
    "songId": 52,
    "title": "Ain't It a Sad Thing",
    "artist": "R. Dean Taylor"
  },
  {
    "songId": 53,
    "title": "Cherish What Is Dear to You (While It's Near to You)",
    "artist": "Freda Payne"
  },
  {
    "songId": 54,
    "title": "For All We Know",
    "artist": "The Carpenters"
  },
  {
    "songId": 55,
    "title": "Doesn't Somebody Want to Be Wanted",
    "artist": "The Partridge Family"
  },
  {
    "songId": 56,
    "title": "Somebody to Love",
    "artist": "Jefferson Airplane"
  },
  {
    "songId": 57,
    "title": "Volunteers",
    "artist": "Jefferson Airplane"
  },
  {
    "songId": 58,
    "title": "Amazing Grace",
    "artist": "Judy Collins"
  },
  {
    "songId": 59,
    "title": "Me and Bobby McGee",
    "artist": "Janis Joplin"
  },
  {
    "songId": 60,
    "title": "Oye Como Va",
    "artist": "Santana"
  },
  {
    "songId": 61,
    "title": "Free",
    "artist": "Chicago"
  },
  {
    "songId": 62,
    "title": "Temptation Eyes",
    "artist": "The Grass Roots"
  },
  {
    "songId": 63,
    "title": "Precious, Precious",
    "artist": "Jackie Moore"
  },
  {
    "songId": 64,
    "title": "Sweet Mary",
    "artist": "Wadsworth Mansion"
  },
  {
    "songId": 65,
    "title": "Proud Mary",
    "artist": "Ike & Tina Turner"
  },
  {
    "songId": 66,
    "title": "Theme from Love Story",
    "artist": "Henry Mancini"
  },
  {
    "songId": 67,
    "title": "What Is Life",
    "artist": "George Harrison"
  },
  {
    "songId": 68,
    "title": "Amos Moses",
    "artist": "Jerry Reed"
  },
  {
    "songId": 69,
    "title": "Cry Baby",
    "artist": "Janis Joplin"
  },
  {
    "songId": 70,
    "title": "Theme from Love Story",
    "artist": "Francis Lai"
  },
  {
    "songId": 71,
    "title": "Just My Imagination (Running Away With Me)",
    "artist": "The Temptations"
  },
  {
    "songId": 72,
    "title": "She's a Lady",
    "artist": "Tom Jones"
  },
  {
    "songId": 73,
    "title": "Another Day",
    "artist": "Paul McCartney"
  },
  {
    "songId": 74,
    "title": "Oh Woman Oh Why",
    "artist": "Paul McCartney"
  },
  {
    "songId": 75,
    "title": "Can't Stop Loving You",
    "artist": "Tom Jones"
  },
  {
    "songId": 76,
    "title": "Cried Like a Baby",
    "artist": "Bobby Sherman"
  },
  {
    "songId": 77,
    "title": "Sit Yourself Down",
    "artist": "Stephen Stills"
  },
  {
    "songId": 78,
    "title": "What's Going On",
    "artist": "Marvin Gaye"
  },
  {
    "songId": 79,
    "title": "We Can Work It Out",
    "artist": "Stevie Wonder"
  },
  {
    "songId": 80,
    "title": "Time and Love",
    "artist": "Barbra Streisand"
  },
  {
    "songId": 81,
    "title": "Me and Bobby McGee (long version)",
    "artist": "Janis Joplin"
  },
  {
    "songId": 82,
    "title": "Move Over",
    "artist": "Janis Joplin"
  },
  {
    "songId": 83,
    "title": "You're All I Need to Get By",
    "artist": "Aretha Franklin"
  },
  {
    "songId": 84,
    "title": "Help Me Make It Through the Night",
    "artist": "Sammi Smith"
  },
  {
    "songId": 85,
    "title": "Joy to the World",
    "artist": "Three Dog Night"
  },
  {
    "songId": 86,
    "title": "Dream Baby (How Long Must I Dream)",
    "artist": "Glen Campbell"
  },
  {
    "songId": 87,
    "title": "Power to the People",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 88,
    "title": "(Where Do I Begin) Love Story",
    "artist": "Andy Williams"
  },
  {
    "songId": 89,
    "title": "I Am...I Said",
    "artist": "Neil Diamond"
  },
  {
    "songId": 90,
    "title": "Soul Power, Pt. 1",
    "artist": "James Brown"
  },
  {
    "songId": 91,
    "title": "Heavy Makes You Happy (Sha-Na-Boom-Boom)",
    "artist": "The Staple Singers"
  },
  {
    "songId": 92,
    "title": "Love's Lines, Angles and Rhymes",
    "artist": "The 5th Dimension"
  },
  {
    "songId": 93,
    "title": "Never Can Say Goodbye",
    "artist": "The Jackson 5"
  },
  {
    "songId": 94,
    "title": "Wild World",
    "artist": "Cat Stevens"
  },
  {
    "songId": 95,
    "title": "Friends",
    "artist": "Elton John"
  },
  {
    "songId": 96,
    "title": "No Love at All",
    "artist": "B.J. Thomas"
  },
  {
    "songId": 97,
    "title": "Love Her Madly",
    "artist": "The Doors"
  },
  {
    "songId": 98,
    "title": "Freedom",
    "artist": "Jimi Hendrix"
  },
  {
    "songId": 99,
    "title": "Booty Butt",
    "artist": "The Ray Charles Orchestra"
  },
  {
    "songId": 100,
    "title": "Bridge Over Troubled Water",
    "artist": "Aretha Franklin"
  },
  {
    "songId": 101,
    "title": "Put Your Hand In the Hand",
    "artist": "Ocean"
  },
  {
    "songId": 102,
    "title": "Stay Awhile",
    "artist": "The Bells"
  },
  {
    "songId": 103,
    "title": "One Toke Over the Line",
    "artist": "Brewer & Shipley"
  },
  {
    "songId": 104,
    "title": "It Don't Come Easy",
    "artist": "Ringo Starr"
  },
  {
    "songId": 105,
    "title": "Mama Told Me (Not to Come)",
    "artist": "Three Dog Night"
  },
  {
    "songId": 106,
    "title": "Eli's Coming",
    "artist": "Three Dog Night"
  },
  {
    "songId": 107,
    "title": "One",
    "artist": "Three Dog Night"
  },
  {
    "songId": 108,
    "title": "Easy to Be Hard",
    "artist": "Three Dog Night"
  },
  {
    "songId": 109,
    "title": "If",
    "artist": "Bread"
  },
  {
    "songId": 110,
    "title": "I Play and Sing",
    "artist": "Dawn"
  },
  {
    "songId": 111,
    "title": "Here Comes the Sun",
    "artist": "Richie Havens"
  },
  {
    "songId": 112,
    "title": "Brown Sugar",
    "artist": "The Rolling Stones"
  },
  {
    "songId": 113,
    "title": "Want Ads",
    "artist": "The Honey Cone"
  },
  {
    "songId": 114,
    "title": "Teach Your Children",
    "artist": "Crosby, Stills, Nash & Young"
  },
  {
    "songId": 115,
    "title": "I'll Meet You Halfway",
    "artist": "The Partridge Family"
  },
  {
    "songId": 116,
    "title": "I Love You For All Seasons",
    "artist": "The Fuzz"
  },
  {
    "songId": 117,
    "title": "Me and You and a Dog Named Boo",
    "artist": "Lobo"
  },
  {
    "songId": 118,
    "title": "Chick-a-Boom",
    "artist": "Daddy Dewdrop"
  },
  {
    "songId": 119,
    "title": "Tarkio Road",
    "artist": "Brewer & Shipley"
  },
  {
    "songId": 120,
    "title": "Right On the Tip of My Tongue",
    "artist": "Brenda & the Tabulations"
  },
  {
    "songId": 121,
    "title": "Sweet and Innocent",
    "artist": "Donny Osmond"
  },
  {
    "songId": 122,
    "title": "I Don't Know How to Love Him",
    "artist": "Helen Reddy"
  },
  {
    "songId": 123,
    "title": "Rainy Days and Mondays",
    "artist": "The Carpenters"
  },
  {
    "songId": 124,
    "title": "Ooh Poo Pah Doo",
    "artist": "Ike & Tina Turner"
  },
  {
    "songId": 125,
    "title": "Funky Nassau",
    "artist": "The Beginning of the End"
  },
  {
    "songId": 126,
    "title": "You've Got a Friend",
    "artist": "James Taylor"
  },
  {
    "songId": 127,
    "title": "Feelin' Alright",
    "artist": "Grand Funk Railroad"
  },
  {
    "songId": 128,
    "title": "Don't Knock My Love",
    "artist": "Wilson Pickett"
  },
  {
    "songId": 129,
    "title": "It's Too Late",
    "artist": "Carole King"
  },
  {
    "songId": 130,
    "title": "Wild Horses",
    "artist": "The Rolling Stones"
  },
  {
    "songId": 131,
    "title": "Heart of the Country",
    "artist": "Paul & Linda McCartney"
  },
  {
    "songId": 132,
    "title": "Too Many People",
    "artist": "Paul & Linda McCartney"
  },
  {
    "songId": 133,
    "title": "Smile Away",
    "artist": "Paul & Linda McCartney"
  },
  {
    "songId": 134,
    "title": "Treat Her Like a Lady",
    "artist": "Cornelius Brothers & Sister Rose"
  },
  {
    "songId": 135,
    "title": "Nathan Jones",
    "artist": "The Supremes"
  },
  {
    "songId": 136,
    "title": "Indian Reservation (The Lament of the Cherokee Reservation Indian)",
    "artist": "The Raiders"
  },
  {
    "songId": 137,
    "title": "When You're Hot, You're Hot",
    "artist": "Jerry Reed"
  },
  {
    "songId": 138,
    "title": "Sway",
    "artist": "The Rolling Stones"
  },
  {
    "songId": 139,
    "title": "Mr. Big Stuff",
    "artist": "Jean Knight"
  },
  {
    "songId": 140,
    "title": "Double Lovin'",
    "artist": "The Osmonds"
  },
  {
    "songId": 141,
    "title": "Don't Pull Your Love",
    "artist": "Hamilton, Joe Frank & Reynolds"
  },
  {
    "songId": 142,
    "title": "I Know I'm In Love",
    "artist": "Chee-Chee & Peppy"
  },
  {
    "songId": 143,
    "title": "She's Not Just Another Woman",
    "artist": "The 8th Day"
  },
  {
    "songId": 144,
    "title": "Never Can Say Goodbye",
    "artist": "Isaac Hayes"
  },
  {
    "songId": 145,
    "title": "That's the Way I've Always Heard It Should Be",
    "artist": "Carly Simon"
  },
  {
    "songId": 146,
    "title": "I Feel the Earth Move",
    "artist": "Carole King"
  },
  {
    "songId": 147,
    "title": "Love the One You're With",
    "artist": "The Isley Brothers"
  },
  {
    "songId": 148,
    "title": "Make It With You",
    "artist": "Ralfi Pagan"
  },
  {
    "songId": 149,
    "title": "I Don't Want to Do Wrong",
    "artist": "Gladys Knight & the Pips"
  },
  {
    "songId": 150,
    "title": "Bring the Boys Home",
    "artist": "Freda Payne"
  },
  {
    "songId": 151,
    "title": "Get It On",
    "artist": "Chase"
  },
  {
    "songId": 152,
    "title": "Sooner or Later",
    "artist": "The Grass Roots"
  },
  {
    "songId": 153,
    "title": "Here Comes That Rainy Day Feeling Again",
    "artist": "The Fortunes"
  },
  {
    "songId": 154,
    "title": "You've Got a Friend",
    "artist": "Roberta Flack & Donny Hathaway"
  },
  {
    "songId": 155,
    "title": "Draggin' the Line",
    "artist": "Tommy James"
  },
  {
    "songId": 156,
    "title": "Take Me Home, Country Roads",
    "artist": "John Denver"
  },
  {
    "songId": 157,
    "title": "Love the One You're With",
    "artist": "Aretha Franklin"
  },
  {
    "songId": 158,
    "title": "Mercy Mercy Me (The Ecology)",
    "artist": "Marvin Gaye"
  },
  {
    "songId": 159,
    "title": "Signs",
    "artist": "The Five Man Electrical Band"
  },
  {
    "songId": 160,
    "title": "Beginnings",
    "artist": "Chicago"
  },
  {
    "songId": 161,
    "title": "How Can You Mend a Broken Heart",
    "artist": "The Bee Gees"
  },
  {
    "songId": 162,
    "title": "Never Ending Song of Love",
    "artist": "Delaney & Bonnie & Friends"
  },
  {
    "songId": 163,
    "title": "Uncle Albert/Admiral Halsey",
    "artist": "Paul & Linda McCartney"
  },
  {
    "songId": 164,
    "title": "Hot Pants (She Got to Use What She Got to Get What She Wants) Pt. 1",
    "artist": "James Brown"
  },
  {
    "songId": 165,
    "title": "Hymn 43",
    "artist": "Jethro Tull"
  },
  {
    "songId": 166,
    "title": "K-Jee",
    "artist": "The Nite-Liters"
  },
  {
    "songId": 167,
    "title": "Spanish Harlem",
    "artist": "Aretha Franklin"
  },
  {
    "songId": 168,
    "title": "Riders On the Storm",
    "artist": "The Doors"
  },
  {
    "songId": 169,
    "title": "Sweet Hitch-Hiker",
    "artist": "Creedence Clearwater Revival"
  },
  {
    "songId": 170,
    "title": "Bangla-Desh",
    "artist": "George Harrison"
  },
  {
    "songId": 171,
    "title": "Are You Ready Eddy?",
    "artist": "Emerson, Lake & Palmer"
  },
  {
    "songId": 172,
    "title": "Maybe Tomorrow",
    "artist": "The Jackson 5"
  },
  {
    "songId": 173,
    "title": "I Just Want to Celebrate",
    "artist": "Rare Earth"
  },
  {
    "songId": 174,
    "title": "What the World Needs Now Is Love/Abraham, Martin & John",
    "artist": "Tom Clay"
  },
  {
    "songId": 175,
    "title": "Whatcha See Is Whatcha Get",
    "artist": "The Dramatics"
  },
  {
    "songId": 176,
    "title": "I Woke Up In Love This Morning",
    "artist": "The Partridge Family"
  },
  {
    "songId": 177,
    "title": "Reason to Believe",
    "artist": "Rod Stewart"
  },
  {
    "songId": 178,
    "title": "Maggie May",
    "artist": "Rod Stewart"
  },
  {
    "songId": 179,
    "title": "Smiling Faces Sometimes",
    "artist": "The Undisputed Truth"
  },
  {
    "songId": 180,
    "title": "Liar",
    "artist": "Three Dog Night"
  },
  {
    "songId": 181,
    "title": "Go Down Gamblin'",
    "artist": "Blood, Sweat & Tears"
  },
  {
    "songId": 182,
    "title": "Ain't No Sunshine",
    "artist": "Bill Withers"
  },
  {
    "songId": 183,
    "title": "Stick-Up",
    "artist": "The Honey Cone"
  },
  {
    "songId": 184,
    "title": "Chirpy Chirpy Cheep Cheep",
    "artist": "Mac & Katie Kissoon"
  },
  {
    "songId": 185,
    "title": "Go Away Little Girl",
    "artist": "Donny Osmond"
  },
  {
    "songId": 186,
    "title": "Won't Get Fooled Again",
    "artist": "The Who"
  },
  {
    "songId": 187,
    "title": "Change Partners",
    "artist": "Stephen Stills"
  },
  {
    "songId": 188,
    "title": "Sugar Babe",
    "artist": "Stephen Stills"
  },
  {
    "songId": 189,
    "title": "So Far Away",
    "artist": "Carole King"
  },
  {
    "songId": 190,
    "title": "The Night They Drove Old Dixie Down",
    "artist": "Joan Baez"
  },
  {
    "songId": 191,
    "title": "Superstar",
    "artist": "The Carpenters"
  },
  {
    "songId": 192,
    "title": "Imagine",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 193,
    "title": "Jealous Guy",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 194,
    "title": "Crippled Inside",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 195,
    "title": "Oh Yoko!",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 196,
    "title": "How?",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 197,
    "title": "Oh My Love",
    "artist": "John Lennon/Plastic Ono Band"
  },
  {
    "songId": 198,
    "title": "The Story In Your Eyes",
    "artist": "The Moody Blues"
  },
  {
    "songId": 199,
    "title": "Call My Name, I'll Be There",
    "artist": "Wilson Pickett"
  },
  {
    "songId": 200,
    "title": "Wedding Song (There Is Love)",
    "artist": "Paul Stookey"
  },
  {
    "songId": 201,
    "title": "Rain Dance",
    "artist": "The Guess Who"
  },
  {
    "songId": 202,
    "title": "Thin Line Between Love and Hate",
    "artist": "The Persuaders"
  },
  {
    "songId": 203,
    "title": "If You Really Love Me",
    "artist": "Stevie Wonder"
  },
  {
    "songId": 204,
    "title": "Tired of Being Alone",
    "artist": "Al Green"
  },
  {
    "songId": 205,
    "title": "Marianne",
    "artist": "Stephen Stills"
  },
  {
    "songId": 206,
    "title": "Yo-Yo",
    "artist": "The Osmonds"
  },
  {
    "songId": 207,
    "title": "Make It Funky, Part 1",
    "artist": "James Brown"
  },
  {
    "songId": 208,
    "title": "Do You Know What I Mean",
    "artist": "Lee Michaels"
  },
  {
    "songId": 209,
    "title": "All Day Music",
    "artist": "War"
  },
  {
    "songId": 210,
    "title": "Sweet City Woman",
    "artist": "The Stampeders"
  },
  {
    "songId": 211,
    "title": "I'm Comin' Home",
    "artist": "Tommy James"
  },
  {
    "songId": 212,
    "title": "Theme from Shaft",
    "artist": "Isaac Hayes"
  },
  {
    "songId": 213,
    "title": "5-10-15-20 (25-30 Years of Love)",
    "artist": "The Presidents"
  },
  {
    "songId": 214,
    "title": "Birds of a Feather",
    "artist": "The Raiders"
  },
  {
    "songId": 215,
    "title": "MacArthur Park",
    "artist": "The Four Tops"
  },
  {
    "songId": 216,
    "title": "One Fine Morning",
    "artist": "Lighthouse"
  },
  {
    "songId": 217,
    "title": "I Want to Pay You Back (For Loving Me)",
    "artist": "The Chi-Lites"
  },
  {
    "songId": 218,
    "title": "Pretty As You Feel",
    "artist": "Jefferson Airplane"
  },
  {
    "songId": 219,
    "title": "Peace Train",
    "artist": "Cat Stevens"
  },
  {
    "songId": 220,
    "title": "Never My Love",
    "artist": "The 5th Dimension"
  },
  {
    "songId": 221,
    "title": "Only You Know and I Know",
    "artist": "Delaney & Bonnie"
  },
  {
    "songId": 222,
    "title": "Everybody's Everything",
    "artist": "Santana"
  },
  {
    "songId": 223,
    "title": "Trapped By a Thing Called Love",
    "artist": "Denise LaSalle"
  },
  {
    "songId": 224,
    "title": "I've Found Someone of My Own",
    "artist": "The Free Movement"
  },
  {
    "songId": 225,
    "title": "Gypsys, Tramps and Thieves",
    "artist": "Cher"
  },
  {
    "songId": 226,
    "title": "Long Ago and Far Away",
    "artist": "James Taylor"
  },
  {
    "songId": 227,
    "title": "Baby I'm-a Want You",
    "artist": "Bread"
  },
  {
    "songId": 228,
    "title": "You've Got to Crawl (Before You Walk)",
    "artist": "The 8th Day"
  },
  {
    "songId": 229,
    "title": "Inner City Blues (Make Me Wanna Holler)",
    "artist": "Marvin Gaye"
  },
  {
    "songId": 230,
    "title": "Have You Seen Her",
    "artist": "The Chi-Lites"
  },
  {
    "songId": 231,
    "title": "Rock Steady",
    "artist": "Aretha Franklin"
  },
  {
    "songId": 232,
    "title": "Where Did Our Love Go",
    "artist": "Donnie Elbert"
  },
  {
    "songId": 233,
    "title": "Family Affair",
    "artist": "Sly & the Family Stone"
  },
  {
    "songId": 234,
    "title": "Got to Be There",
    "artist": "Michael Jackson"
  },
  {
    "songId": 235,
    "title": "Two Divided By Love",
    "artist": "The Grass Roots"
  },
  {
    "songId": 236,
    "title": "Absolutely Right",
    "artist": "The Five Man Electrical Band"
  },
  {
    "songId": 237,
    "title": "Wild Night",
    "artist": "Van Morrison"
  },
  {
    "songId": 238,
    "title": "The Desiderata",
    "artist": "Les Crane"
  },
  {
    "songId": 239,
    "title": "Bitterblue",
    "artist": "Cat Stevens"
  },
  {
    "songId": 240,
    "title": "Respect Yourself",
    "artist": "The Staple Singers"
  },
  {
    "songId": 241,
    "title": "Cherish",
    "artist": "David Cassidy"
  },
  {
    "songId": 242,
    "title": "All I Ever Need Is You",
    "artist": "Sonny & Cher"
  },
  {
    "songId": 243,
    "title": "Nothing to Hide",
    "artist": "Tommy James"
  },
  {
    "songId": 244,
    "title": "Old-Fashioned Love Song",
    "artist": "Three Dog Night"
  },
  {
    "songId": 245,
    "title": "(I Know) I'm Losing You",
    "artist": "Rod Stewart"
  },
  {
    "songId": 246,
    "title": "Scorpio",
    "artist": "Dennis Coffey & the Detroit Guitar Band"
  },
  {
    "songId": 247,
    "title": "I'm a Greedy Man, Part 1",
    "artist": "James Brown"
  },
  {
    "songId": 248,
    "title": "Superstar (Remember How You Got Where You Are)",
    "artist": "The Temptations"
  },
  {
    "songId": 249,
    "title": "Para los Rumberos",
    "artist": "Santana"
  },
  {
    "songId": 250,
    "title": "Brand New Key",
    "artist": "Melanie"
  },
  {
    "songId": 251,
    "title": "Stones",
    "artist": "Neil Diamond"
  },
  {
    "songId": 252,
    "title": "Anticipation",
    "artist": "Carly Simon"
  },
  {
    "songId": 253,
    "title": "You Are Everything",
    "artist": "The Stylistics"
  },
  {
    "songId": 254,
    "title": "American Pie",
    "artist": "Don McLean"
  },
  {
    "songId": 255,
    "title": "Hey Girl",
    "artist": "Donny Osmond"
  },
  {
    "songId": 256,
    "title": "Let's Stay Together",
    "artist": "Al Green"
  },
  {
    "songId": 257,
    "title": "Be My Baby",
    "artist": "Andy Kim"
  },
  {
    "songId": 258,
    "title": "One Monkey Don't Stop No Show",
    "artist": "The Honey Cone"
  },
  {
    "songId": 259,
    "title": "Drowning In the Sea of Love",
    "artist": "Joe Simon"
  },
  {
    "songId": 260,
    "title": "Sugar Daddy",
    "artist": "The Jackson 5"
  },
  {
    "songId": 261,
    "title": "Theme from \"Summer of '42\"",
    "artist": "Peter Nero"
  },
  {
    "songId": 262,
    "title": "We've Only Just Begun",
    "artist": "The Carpenters"
  },
  {
    "songId": 263,
    "title": "I'd Like to Teach the World to Sing",
    "artist": "The Hillside Singers"
  },
  {
    "songId": 264,
    "title": "Clean-Up Woman",
    "artist": "Betty Wright"
  },
  {
    "songId": 265,
    "title": "Sunshine",
    "artist": "Jonathan Edwards"
  },
  {
    "songId": 266,
    "title": "Jingle Bells",
    "artist": "The Singing Dogs"
  },
  {
    "songId": 267,
    "title": "Happy Xmas (War Is Over)",
    "artist": "John & Yoko & the Plastic Ono Band with the Harlem Community Choir"
  },
  {
    "songId": 268,
    "title": "Hallelujah",
    "artist": "Sweathog"
  },
  {
    "songId": 269,
    "title": "Song of Long Ago",
    "artist": "Carole King"
  },
  {
    "songId": 270,
    "title": "Footstompin' Music",
    "artist": "Grand Funk Railroad"
  },
  {
    "songId": 271,
    "title": "Black Dog",
    "artist": "Led Zeppelin"
  },
  {
    "songId": 272,
    "title": "Groove Me",
    "artist": "King Floyd"
  },
  {
    "songId": 273,
    "title": "I'll Be There",
    "artist": "The Jackson 5"
  },
  {
    "songId": 274,
    "title": "No Matter What",
    "artist": "Badfinger"
  },
  {
    "songId": 275,
    "title": "Beware of Darkness",
    "artist": "George Harrison"
  },
  {
    "songId": 276,
    "title": "Wah-Wah",
    "artist": "George Harrison"
  },
  {
    "songId": 277,
    "title": "Awaiting On You All",
    "artist": "George Harrison"
  },
  {
    "songId": 278,
    "title": "Jumping Jack Flash (medley)",
    "artist": "Leon Russell"
  },
  {
    "songId": 279,
    "title": "Youngblood (medley)",
    "artist": "Leon Russell"
  },
  {
    "songId": 280,
    "title": "I've Seen All Good People",
    "artist": "Yes"
  },
  {
    "songId": 281,
    "title": "Hey Big Brother",
    "artist": "Rare Earth"
  },
  {
    "songId": 282,
    "title": "Levon",
    "artist": "Elton John"
  },
  {
    "songId": 283,
    "title": "Jeepster",
    "artist": "T. Rex"
  },
  {
    "songId": 284,
    "title": "I Don't Need No Doctor",
    "artist": "Humble Pie"
  },
  {
    "songId": 285,
    "title": "Precious and Few",
    "artist": "Climax"
  },
  {
    "songId": 286,
    "title": "Looking For a Love",
    "artist": "J. Geils Band"
  },
  {
    "songId": 287,
    "title": "He Ain't Heavy...He's My Brother",
    "artist": "Neil Diamond"
  }
]

var surveyWeekTbl =
[
  {
    "surveyId": 1,
    "weeks": [
      {
        "weekOf": "12/29/1970",
        "songRanks": [
          {
            "songId": 3,
            "rank": "1"
          },
          {
            "songId": 6,
            "rank": "2"
          },
          {
            "songId": 2,
            "rank": "3"
          },
          {
            "songId": 1,
            "rank": "4"
          },
          {
            "songId": 4,
            "rank": "5"
          },
          {
            "songId": 5,
            "rank": "6"
          },
          {
            "songId": 12,
            "rank": "7"
          },
          {
            "songId": 7,
            "rank": "8"
          },
          {
            "songId": 12,
            "rank": "9"
          },
          {
            "songId": 16,
            "rank": "10"
          },
          {
            "songId": 9,
            "rank": "11"
          },
          {
            "songId": 272,
            "rank": "12"
          },
          {
            "songId": 273,
            "rank": "13"
          },
          {
            "songId": 11,
            "rank": "14"
          },
          {
            "songId": 274,
            "rank": "15"
          },
          {
            "songId": 262,
            "rank": "16"
          },
          {
            "songId": 257,
            "rank": "17"
          },
          {
            "songId": 10,
            "rank": "19"
          },
          {
            "songId": 213,
            "rank": "20"
          },
          {
            "songId": 75,
            "rank": "24"
          },
          {
            "songId": 287,
            "rank": "28"
          },
          {
            "songId": 14,
            "rank": "29"
          },
          {
            "songId": 15,
            "rank": "32"
          },
          {
            "songId": 18,
            "rank": "36"
          },
          {
            "songId": 17,
            "rank": "37"
          },
          {
            "songId": 25,
            "rank": "HP"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 22,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 26,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "01/05/1971",
        "songRanks": [
          {
            "songId": 1,
            "rank": "1"
          },
          {
            "songId": 2,
            "rank": "2"
          },
          {
            "songId": 3,
            "rank": "3"
          },
          {
            "songId": 4,
            "rank": "4"
          },
          {
            "songId": 5,
            "rank": "5"
          },
          {
            "songId": 6,
            "rank": "6"
          },
          {
            "songId": 7,
            "rank": "7"
          },
          {
            "songId": 8,
            "rank": "8"
          },
          {
            "songId": 9,
            "rank": "9"
          },
          {
            "songId": 10,
            "rank": "10"
          },
          {
            "songId": 11,
            "rank": "11"
          },
          {
            "songId": 12,
            "rank": "12"
          },
          {
            "songId": 13,
            "rank": "13"
          },
          {
            "songId": 14,
            "rank": "14"
          },
          {
            "songId": 15,
            "rank": "17"
          },
          {
            "songId": 16,
            "rank": "18"
          },
          {
            "songId": 17,
            "rank": "20"
          },
          {
            "songId": 18,
            "rank": "23"
          },
          {
            "songId": 19,
            "rank": "38"
          },
          {
            "songId": 20,
            "rank": "39"
          },
          {
            "songId": 21,
            "rank": "44"
          },
          {
            "songId": 22,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 25,
            "rank": "AC"
          },
          {
            "songId": 26,
            "rank": "AC"
          },
          {
            "songId": 27,
            "rank": "AC"
          },
          {
            "songId": 28,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 30,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "01/12/1971",
        "songRanks": [
          {
            "songId": 1,
            "rank": "1"
          },
          {
            "songId": 4,
            "rank": "2"
          },
          {
            "songId": 2,
            "rank": "3"
          },
          {
            "songId": 3,
            "rank": "4"
          },
          {
            "songId": 5,
            "rank": "5"
          },
          {
            "songId": 6,
            "rank": "6"
          },
          {
            "songId": 8,
            "rank": "7"
          },
          {
            "songId": 7,
            "rank": "8"
          },
          {
            "songId": 14,
            "rank": "9"
          },
          {
            "songId": 10,
            "rank": "10"
          },
          {
            "songId": 11,
            "rank": "11"
          },
          {
            "songId": 20,
            "rank": "12"
          },
          {
            "songId": 13,
            "rank": "13"
          },
          {
            "songId": 9,
            "rank": "14"
          },
          {
            "songId": 36,
            "rank": "16"
          },
          {
            "songId": 18,
            "rank": "17"
          },
          {
            "songId": 19,
            "rank": "25"
          },
          {
            "songId": 37,
            "rank": "43"
          },
          {
            "songId": 38,
            "rank": "60"
          },
          {
            "songId": 39,
            "rank": "HP"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 22,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 25,
            "rank": "AC"
          },
          {
            "songId": 26,
            "rank": "AC"
          },
          {
            "songId": 28,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 27,
            "rank": "AC"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 41,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "01/19/1971",
        "songRanks": [
          {
            "songId": 4,
            "rank": "1"
          },
          {
            "songId": 1,
            "rank": "2"
          },
          {
            "songId": 2,
            "rank": "3"
          },
          {
            "songId": 20,
            "rank": "4"
          },
          {
            "songId": 3,
            "rank": "5"
          },
          {
            "songId": 13,
            "rank": "6"
          },
          {
            "songId": 36,
            "rank": "7"
          },
          {
            "songId": 14,
            "rank": "8"
          },
          {
            "songId": 5,
            "rank": "9"
          },
          {
            "songId": 42,
            "rank": "10"
          },
          {
            "songId": 18,
            "rank": "11"
          },
          {
            "songId": 10,
            "rank": "12"
          },
          {
            "songId": 8,
            "rank": "13"
          },
          {
            "songId": 9,
            "rank": "14"
          },
          {
            "songId": 23,
            "rank": "16"
          },
          {
            "songId": 19,
            "rank": "17"
          },
          {
            "songId": 6,
            "rank": "18"
          },
          {
            "songId": 7,
            "rank": "19"
          },
          {
            "songId": 21,
            "rank": "22"
          },
          {
            "songId": 38,
            "rank": "23"
          },
          {
            "songId": 43,
            "rank": "28"
          },
          {
            "songId": 44,
            "rank": "32"
          },
          {
            "songId": 45,
            "rank": "35"
          },
          {
            "songId": 46,
            "rank": "37"
          },
          {
            "songId": 47,
            "rank": "50"
          },
          {
            "songId": 39,
            "rank": "HP"
          },
          {
            "songId": 25,
            "rank": "AC"
          },
          {
            "songId": 27,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 22,
            "rank": "AC"
          },
          {
            "songId": 26,
            "rank": "AC"
          },
          {
            "songId": 28,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 30,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "01/26/1971",
        "songRanks": [
          {
            "songId": 1,
            "rank": "1"
          },
          {
            "songId": 4,
            "rank": "2"
          },
          {
            "songId": 36,
            "rank": "3"
          },
          {
            "songId": 20,
            "rank": "4"
          },
          {
            "songId": 14,
            "rank": "5"
          },
          {
            "songId": 38,
            "rank": "6"
          },
          {
            "songId": 2,
            "rank": "7"
          },
          {
            "songId": 13,
            "rank": "8"
          },
          {
            "songId": 8,
            "rank": "9"
          },
          {
            "songId": 5,
            "rank": "10"
          },
          {
            "songId": 3,
            "rank": "11"
          },
          {
            "songId": 18,
            "rank": "12"
          },
          {
            "songId": 42,
            "rank": "13"
          },
          {
            "songId": 10,
            "rank": "14"
          },
          {
            "songId": 45,
            "rank": "16"
          },
          {
            "songId": 7,
            "rank": "17"
          },
          {
            "songId": 19,
            "rank": "20"
          },
          {
            "songId": 44,
            "rank": "22"
          },
          {
            "songId": 46,
            "rank": "24"
          },
          {
            "songId": 23,
            "rank": "25"
          },
          {
            "songId": 49,
            "rank": "26"
          },
          {
            "songId": 50,
            "rank": "35"
          },
          {
            "songId": 51,
            "rank": "45"
          },
          {
            "songId": 52,
            "rank": "HP"
          },
          {
            "songId": 53,
            "rank": "HP"
          },
          {
            "songId": 54,
            "rank": "HP"
          },
          {
            "songId": 55,
            "rank": "HP"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 25,
            "rank": "AC"
          },
          {
            "songId": 27,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 26,
            "rank": "AC"
          },
          {
            "songId": 28,
            "rank": "AC"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 56,
            "rank": "AC"
          },
          {
            "songId": 57,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "02/02/1971",
        "songRanks": [
          {
            "songId": 1,
            "rank": "1"
          },
          {
            "songId": 36,
            "rank": "2"
          },
          {
            "songId": 38,
            "rank": "3"
          },
          {
            "songId": 20,
            "rank": "4"
          },
          {
            "songId": 2,
            "rank": "5"
          },
          {
            "songId": 14,
            "rank": "6"
          },
          {
            "songId": 4,
            "rank": "7"
          },
          {
            "songId": 45,
            "rank": "8"
          },
          {
            "songId": 19,
            "rank": "9"
          },
          {
            "songId": 10,
            "rank": "10"
          },
          {
            "songId": 18,
            "rank": "11"
          },
          {
            "songId": 46,
            "rank": "12"
          },
          {
            "songId": 13,
            "rank": "13"
          },
          {
            "songId": 44,
            "rank": "14"
          },
          {
            "songId": 3,
            "rank": "15"
          },
          {
            "songId": 8,
            "rank": "17"
          },
          {
            "songId": 23,
            "rank": "18"
          },
          {
            "songId": 43,
            "rank": "20"
          },
          {
            "songId": 50,
            "rank": "23"
          },
          {
            "songId": 58,
            "rank": "24"
          },
          {
            "songId": 55,
            "rank": "25"
          },
          {
            "songId": 49,
            "rank": "26"
          },
          {
            "songId": 51,
            "rank": "32"
          },
          {
            "songId": 54,
            "rank": "45"
          },
          {
            "songId": 53,
            "rank": "HP"
          },
          {
            "songId": 52,
            "rank": "HP"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          },
          {
            "songId": 27,
            "rank": "AC"
          },
          {
            "songId": 25,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 28,
            "rank": "AC"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 26,
            "rank": "AC"
          },
          {
            "songId": 56,
            "rank": "AC"
          },
          {
            "songId": 57,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "02/09/1971",
        "songRanks": [
          {
            "songId": 38,
            "rank": "1"
          },
          {
            "songId": 36,
            "rank": "2"
          },
          {
            "songId": 1,
            "rank": "3"
          },
          {
            "songId": 20,
            "rank": "4"
          },
          {
            "songId": 45,
            "rank": "5"
          },
          {
            "songId": 46,
            "rank": "6"
          },
          {
            "songId": 4,
            "rank": "7"
          },
          {
            "songId": 14,
            "rank": "8"
          },
          {
            "songId": 43,
            "rank": "9"
          },
          {
            "songId": 44,
            "rank": "10"
          },
          {
            "songId": 18,
            "rank": "11"
          },
          {
            "songId": 2,
            "rank": "12"
          },
          {
            "songId": 49,
            "rank": "13"
          },
          {
            "songId": 13,
            "rank": "14"
          },
          {
            "songId": 50,
            "rank": "15"
          },
          {
            "songId": 10,
            "rank": "16"
          },
          {
            "songId": 58,
            "rank": "17"
          },
          {
            "songId": 54,
            "rank": "18"
          },
          {
            "songId": 19,
            "rank": "19"
          },
          {
            "songId": 55,
            "rank": "21"
          },
          {
            "songId": 62,
            "rank": "32"
          },
          {
            "songId": 63,
            "rank": "36"
          },
          {
            "songId": 64,
            "rank": "39"
          },
          {
            "songId": 65,
            "rank": "40"
          },
          {
            "songId": 66,
            "rank": "44"
          },
          {
            "songId": 67,
            "rank": "HP"
          },
          {
            "songId": 68,
            "rank": "HP"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          },
          {
            "songId": 27,
            "rank": "AC"
          },
          {
            "songId": 70,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 28,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "02/16/1971",
        "songRanks": [
          {
            "songId": 38,
            "rank": "1"
          },
          {
            "songId": 36,
            "rank": "2"
          },
          {
            "songId": 1,
            "rank": "3"
          },
          {
            "songId": 45,
            "rank": "4"
          },
          {
            "songId": 20,
            "rank": "5"
          },
          {
            "songId": 46,
            "rank": "6"
          },
          {
            "songId": 14,
            "rank": "7"
          },
          {
            "songId": 50,
            "rank": "8"
          },
          {
            "songId": 44,
            "rank": "9"
          },
          {
            "songId": 49,
            "rank": "10"
          },
          {
            "songId": 4,
            "rank": "11"
          },
          {
            "songId": 13,
            "rank": "12"
          },
          {
            "songId": 43,
            "rank": "13"
          },
          {
            "songId": 18,
            "rank": "14"
          },
          {
            "songId": 27,
            "rank": "15"
          },
          {
            "songId": 54,
            "rank": "16"
          },
          {
            "songId": 58,
            "rank": "17"
          },
          {
            "songId": 10,
            "rank": "18"
          },
          {
            "songId": 71,
            "rank": "20"
          },
          {
            "songId": 66,
            "rank": "21"
          },
          {
            "songId": 2,
            "rank": "22"
          },
          {
            "songId": 72,
            "rank": "26"
          },
          {
            "songId": 64,
            "rank": "27"
          },
          {
            "songId": 65,
            "rank": "38"
          },
          {
            "songId": 68,
            "rank": "40"
          },
          {
            "songId": 62,
            "rank": "64"
          },
          {
            "songId": 67,
            "rank": "69"
          },
          {
            "songId": 73,
            "rank": "HP"
          },
          {
            "songId": 74,
            "rank": "HP"
          },
          {
            "songId": 70,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 28,
            "rank": "AC"
          },
          {
            "songId": 27,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "02/23/1971",
        "songRanks": [
          {
            "songId": 38,
            "rank": "1"
          },
          {
            "songId": 36,
            "rank": "2"
          },
          {
            "songId": 45,
            "rank": "3"
          },
          {
            "songId": 49,
            "rank": "4"
          },
          {
            "songId": 1,
            "rank": "5"
          },
          {
            "songId": 50,
            "rank": "6"
          },
          {
            "songId": 46,
            "rank": "7"
          },
          {
            "songId": 71,
            "rank": "8"
          },
          {
            "songId": 43,
            "rank": "9"
          },
          {
            "songId": 54,
            "rank": "10"
          },
          {
            "songId": 20,
            "rank": "11"
          },
          {
            "songId": 65,
            "rank": "12"
          },
          {
            "songId": 62,
            "rank": "13"
          },
          {
            "songId": 14,
            "rank": "14"
          },
          {
            "songId": 58,
            "rank": "15"
          },
          {
            "songId": 44,
            "rank": "16"
          },
          {
            "songId": 64,
            "rank": "17"
          },
          {
            "songId": 68,
            "rank": "19"
          },
          {
            "songId": 66,
            "rank": "21"
          },
          {
            "songId": 55,
            "rank": "25"
          },
          {
            "songId": 76,
            "rank": "29"
          },
          {
            "songId": 72,
            "rank": "30"
          },
          {
            "songId": 73,
            "rank": "HP"
          },
          {
            "songId": 77,
            "rank": "HP"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 27,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 70,
            "rank": "AC"
          },
          {
            "songId": 67,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 28,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "03/02/1971",
        "songRanks": [
          {
            "songId": 38,
            "rank": "1"
          },
          {
            "songId": 45,
            "rank": "2"
          },
          {
            "songId": 36,
            "rank": "3"
          },
          {
            "songId": 49,
            "rank": "4"
          },
          {
            "songId": 43,
            "rank": "5"
          },
          {
            "songId": 65,
            "rank": "6"
          },
          {
            "songId": 54,
            "rank": "7"
          },
          {
            "songId": 50,
            "rank": "8"
          },
          {
            "songId": 71,
            "rank": "9"
          },
          {
            "songId": 55,
            "rank": "10"
          },
          {
            "songId": 44,
            "rank": "11"
          },
          {
            "songId": 46,
            "rank": "12"
          },
          {
            "songId": 27,
            "rank": "13"
          },
          {
            "songId": 58,
            "rank": "14"
          },
          {
            "songId": 59,
            "rank": "15"
          },
          {
            "songId": 1,
            "rank": "16"
          },
          {
            "songId": 66,
            "rank": "17"
          },
          {
            "songId": 14,
            "rank": "18"
          },
          {
            "songId": 68,
            "rank": "19"
          },
          {
            "songId": 78,
            "rank": "20"
          },
          {
            "songId": 64,
            "rank": "21"
          },
          {
            "songId": 76,
            "rank": "24"
          },
          {
            "songId": 72,
            "rank": "29"
          },
          {
            "songId": 73,
            "rank": "31"
          },
          {
            "songId": 67,
            "rank": "42"
          },
          {
            "songId": 77,
            "rank": "71"
          },
          {
            "songId": 79,
            "rank": "HP"
          },
          {
            "songId": 80,
            "rank": "HP"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 70,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 81,
            "rank": "AC"
          },
          {
            "songId": 82,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "03/09/1971",
        "songRanks": [
          {
            "songId": 38,
            "rank": "1"
          },
          {
            "songId": 45,
            "rank": "2"
          },
          {
            "songId": 54,
            "rank": "3"
          },
          {
            "songId": 71,
            "rank": "4"
          },
          {
            "songId": 36,
            "rank": "5"
          },
          {
            "songId": 78,
            "rank": "6"
          },
          {
            "songId": 65,
            "rank": "7"
          },
          {
            "songId": 55,
            "rank": "8"
          },
          {
            "songId": 50,
            "rank": "9"
          },
          {
            "songId": 59,
            "rank": "10"
          },
          {
            "songId": 72,
            "rank": "11"
          },
          {
            "songId": 64,
            "rank": "12"
          },
          {
            "songId": 49,
            "rank": "13"
          },
          {
            "songId": 43,
            "rank": "14"
          },
          {
            "songId": 27,
            "rank": "15"
          },
          {
            "songId": 66,
            "rank": "16"
          },
          {
            "songId": 62,
            "rank": "17"
          },
          {
            "songId": 83,
            "rank": "18"
          },
          {
            "songId": 76,
            "rank": "22"
          },
          {
            "songId": 67,
            "rank": "23"
          },
          {
            "songId": 73,
            "rank": "27"
          },
          {
            "songId": 84,
            "rank": "33"
          },
          {
            "songId": 79,
            "rank": "65"
          },
          {
            "songId": 85,
            "rank": "HP"
          },
          {
            "songId": 86,
            "rank": "HP"
          },
          {
            "songId": 87,
            "rank": "HP"
          },
          {
            "songId": 80,
            "rank": "HP"
          },
          {
            "songId": 88,
            "rank": "AC"
          },
          {
            "songId": 70,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 30,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 29,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 81,
            "rank": "AC"
          },
          {
            "songId": 82,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "03/16/1971",
        "songRanks": [
          {
            "songId": 38,
            "rank": "1"
          },
          {
            "songId": 71,
            "rank": "2"
          },
          {
            "songId": 45,
            "rank": "3"
          },
          {
            "songId": 55,
            "rank": "4"
          },
          {
            "songId": 54,
            "rank": "5"
          },
          {
            "songId": 78,
            "rank": "6"
          },
          {
            "songId": 59,
            "rank": "7"
          },
          {
            "songId": 65,
            "rank": "8"
          },
          {
            "songId": 72,
            "rank": "9"
          },
          {
            "songId": 68,
            "rank": "10"
          },
          {
            "songId": 36,
            "rank": "11"
          },
          {
            "songId": 43,
            "rank": "12"
          },
          {
            "songId": 49,
            "rank": "13"
          },
          {
            "songId": 27,
            "rank": "14"
          },
          {
            "songId": 76,
            "rank": "15"
          },
          {
            "songId": 88,
            "rank": "16"
          },
          {
            "songId": 64,
            "rank": "17"
          },
          {
            "songId": 73,
            "rank": "18"
          },
          {
            "songId": 50,
            "rank": "19"
          },
          {
            "songId": 62,
            "rank": "22"
          },
          {
            "songId": 83,
            "rank": "28"
          },
          {
            "songId": 79,
            "rank": "31"
          },
          {
            "songId": 86,
            "rank": "62"
          },
          {
            "songId": 89,
            "rank": "72"
          },
          {
            "songId": 85,
            "rank": "HP"
          },
          {
            "songId": 87,
            "rank": "HP"
          },
          {
            "songId": 67,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 70,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "03/23/1971",
        "songRanks": [
          {
            "songId": 71,
            "rank": "1"
          },
          {
            "songId": 78,
            "rank": "2"
          },
          {
            "songId": 65,
            "rank": "3"
          },
          {
            "songId": 38,
            "rank": "4"
          },
          {
            "songId": 59,
            "rank": "5"
          },
          {
            "songId": 72,
            "rank": "6"
          },
          {
            "songId": 54,
            "rank": "7"
          },
          {
            "songId": 55,
            "rank": "8"
          },
          {
            "songId": 88,
            "rank": "9"
          },
          {
            "songId": 45,
            "rank": "10"
          },
          {
            "songId": 36,
            "rank": "11"
          },
          {
            "songId": 67,
            "rank": "12"
          },
          {
            "songId": 62,
            "rank": "13"
          },
          {
            "songId": 68,
            "rank": "14"
          },
          {
            "songId": 73,
            "rank": "15"
          },
          {
            "songId": 90,
            "rank": "16"
          },
          {
            "songId": 76,
            "rank": "17"
          },
          {
            "songId": 85,
            "rank": "19"
          },
          {
            "songId": 84,
            "rank": "20"
          },
          {
            "songId": 49,
            "rank": "22"
          },
          {
            "songId": 91,
            "rank": "23"
          },
          {
            "songId": 83,
            "rank": "27"
          },
          {
            "songId": 50,
            "rank": "29"
          },
          {
            "songId": 92,
            "rank": "31"
          },
          {
            "songId": 93,
            "rank": "32"
          },
          {
            "songId": 94,
            "rank": "36"
          },
          {
            "songId": 89,
            "rank": "50"
          },
          {
            "songId": 87,
            "rank": "53"
          },
          {
            "songId": 95,
            "rank": "72"
          },
          {
            "songId": 96,
            "rank": "74"
          },
          {
            "songId": 97,
            "rank": "HP"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 98,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "03/30/1971",
        "songRanks": [
          {
            "songId": 71,
            "rank": "1"
          },
          {
            "songId": 78,
            "rank": "2"
          },
          {
            "songId": 55,
            "rank": "3"
          },
          {
            "songId": 65,
            "rank": "4"
          },
          {
            "songId": 59,
            "rank": "5"
          },
          {
            "songId": 54,
            "rank": "6"
          },
          {
            "songId": 88,
            "rank": "7"
          },
          {
            "songId": 72,
            "rank": "8"
          },
          {
            "songId": 38,
            "rank": "9"
          },
          {
            "songId": 85,
            "rank": "10"
          },
          {
            "songId": 73,
            "rank": "11"
          },
          {
            "songId": 68,
            "rank": "12"
          },
          {
            "songId": 93,
            "rank": "13"
          },
          {
            "songId": 84,
            "rank": "14"
          },
          {
            "songId": 90,
            "rank": "15"
          },
          {
            "songId": 36,
            "rank": "16"
          },
          {
            "songId": 67,
            "rank": "17"
          },
          {
            "songId": 45,
            "rank": "18"
          },
          {
            "songId": 91,
            "rank": "19"
          },
          {
            "songId": 62,
            "rank": "20"
          },
          {
            "songId": 79,
            "rank": "21"
          },
          {
            "songId": 99,
            "rank": "22"
          },
          {
            "songId": 87,
            "rank": "25"
          },
          {
            "songId": 89,
            "rank": "26"
          },
          {
            "songId": 94,
            "rank": "30"
          },
          {
            "songId": 96,
            "rank": "40"
          },
          {
            "songId": 95,
            "rank": "41"
          },
          {
            "songId": 92,
            "rank": "44"
          },
          {
            "songId": 97,
            "rank": "53"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 98,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 70,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "04/06/1971",
        "songRanks": [
          {
            "songId": 78,
            "rank": "1"
          },
          {
            "songId": 71,
            "rank": "2"
          },
          {
            "songId": 85,
            "rank": "3"
          },
          {
            "songId": 55,
            "rank": "4"
          },
          {
            "songId": 93,
            "rank": "5"
          },
          {
            "songId": 72,
            "rank": "6"
          },
          {
            "songId": 88,
            "rank": "7"
          },
          {
            "songId": 65,
            "rank": "8"
          },
          {
            "songId": 59,
            "rank": "9"
          },
          {
            "songId": 54,
            "rank": "10"
          },
          {
            "songId": 91,
            "rank": "11"
          },
          {
            "songId": 90,
            "rank": "12"
          },
          {
            "songId": 84,
            "rank": "13"
          },
          {
            "songId": 38,
            "rank": "14"
          },
          {
            "songId": 100,
            "rank": "15"
          },
          {
            "songId": 99,
            "rank": "17"
          },
          {
            "songId": 73,
            "rank": "18"
          },
          {
            "songId": 101,
            "rank": "19"
          },
          {
            "songId": 89,
            "rank": "20"
          },
          {
            "songId": 87,
            "rank": "21"
          },
          {
            "songId": 79,
            "rank": "23"
          },
          {
            "songId": 102,
            "rank": "29"
          },
          {
            "songId": 103,
            "rank": "30"
          },
          {
            "songId": 95,
            "rank": "32"
          },
          {
            "songId": 97,
            "rank": "37"
          },
          {
            "songId": 104,
            "rank": "HP"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 98,
            "rank": "AC"
          },
          {
            "songId": 70,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 105,
            "rank": "AC"
          },
          {
            "songId": 106,
            "rank": "AC"
          },
          {
            "songId": 107,
            "rank": "AC"
          },
          {
            "songId": 108,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "04/13/1971",
        "songRanks": [
          {
            "songId": 78,
            "rank": "1"
          },
          {
            "songId": 85,
            "rank": "2"
          },
          {
            "songId": 71,
            "rank": "3"
          },
          {
            "songId": 93,
            "rank": "4"
          },
          {
            "songId": 89,
            "rank": "5"
          },
          {
            "songId": 88,
            "rank": "6"
          },
          {
            "songId": 72,
            "rank": "7"
          },
          {
            "songId": 73,
            "rank": "8"
          },
          {
            "songId": 55,
            "rank": "9"
          },
          {
            "songId": 65,
            "rank": "10"
          },
          {
            "songId": 100,
            "rank": "11"
          },
          {
            "songId": 84,
            "rank": "12"
          },
          {
            "songId": 99,
            "rank": "13"
          },
          {
            "songId": 94,
            "rank": "14"
          },
          {
            "songId": 102,
            "rank": "15"
          },
          {
            "songId": 79,
            "rank": "16"
          },
          {
            "songId": 54,
            "rank": "17"
          },
          {
            "songId": 59,
            "rank": "19"
          },
          {
            "songId": 97,
            "rank": "21"
          },
          {
            "songId": 101,
            "rank": "22"
          },
          {
            "songId": 103,
            "rank": "23"
          },
          {
            "songId": 109,
            "rank": "39"
          },
          {
            "songId": 110,
            "rank": "41"
          },
          {
            "songId": 111,
            "rank": "64"
          },
          {
            "songId": 104,
            "rank": "HP"
          },
          {
            "songId": 112,
            "rank": "HP"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 98,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 105,
            "rank": "AC"
          },
          {
            "songId": 106,
            "rank": "AC"
          },
          {
            "songId": 107,
            "rank": "AC"
          },
          {
            "songId": 108,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "04/20/1971",
        "songRanks": [
          {
            "songId": 85,
            "rank": "1"
          },
          {
            "songId": 78,
            "rank": "2"
          },
          {
            "songId": 93,
            "rank": "3"
          },
          {
            "songId": 71,
            "rank": "4"
          },
          {
            "songId": 101,
            "rank": "5"
          },
          {
            "songId": 55,
            "rank": "6"
          },
          {
            "songId": 88,
            "rank": "7"
          },
          {
            "songId": 72,
            "rank": "8"
          },
          {
            "songId": 89,
            "rank": "9"
          },
          {
            "songId": 102,
            "rank": "10"
          },
          {
            "songId": 100,
            "rank": "11"
          },
          {
            "songId": 54,
            "rank": "12"
          },
          {
            "songId": 73,
            "rank": "13"
          },
          {
            "songId": 87,
            "rank": "14"
          },
          {
            "songId": 59,
            "rank": "15"
          },
          {
            "songId": 65,
            "rank": "16"
          },
          {
            "songId": 113,
            "rank": "17"
          },
          {
            "songId": 103,
            "rank": "18"
          },
          {
            "songId": 84,
            "rank": "19"
          },
          {
            "songId": 95,
            "rank": "20"
          },
          {
            "songId": 79,
            "rank": "22"
          },
          {
            "songId": 109,
            "rank": "27"
          },
          {
            "songId": 112,
            "rank": "32"
          },
          {
            "songId": 104,
            "rank": "45"
          },
          {
            "songId": 111,
            "rank": "56"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 94,
            "rank": "AC"
          },
          {
            "songId": 98,
            "rank": "AC"
          },
          {
            "songId": 61,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 105,
            "rank": "AC"
          },
          {
            "songId": 106,
            "rank": "AC"
          },
          {
            "songId": 107,
            "rank": "AC"
          },
          {
            "songId": 108,
            "rank": "AC"
          },
          {
            "songId": 48,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 82,
            "rank": "AC"
          },
          {
            "songId": 115,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "04/27/1971",
        "songRanks": [
          {
            "songId": 85,
            "rank": "1"
          },
          {
            "songId": 93,
            "rank": "2"
          },
          {
            "songId": 102,
            "rank": "3"
          },
          {
            "songId": 78,
            "rank": "4"
          },
          {
            "songId": 101,
            "rank": "5"
          },
          {
            "songId": 100,
            "rank": "6"
          },
          {
            "songId": 89,
            "rank": "7"
          },
          {
            "songId": 88,
            "rank": "8"
          },
          {
            "songId": 97,
            "rank": "9"
          },
          {
            "songId": 113,
            "rank": "10"
          },
          {
            "songId": 103,
            "rank": "11"
          },
          {
            "songId": 72,
            "rank": "12"
          },
          {
            "songId": 71,
            "rank": "13"
          },
          {
            "songId": 99,
            "rank": "14"
          },
          {
            "songId": 79,
            "rank": "15"
          },
          {
            "songId": 73,
            "rank": "16"
          },
          {
            "songId": 87,
            "rank": "17"
          },
          {
            "songId": 112,
            "rank": "18"
          },
          {
            "songId": 109,
            "rank": "19"
          },
          {
            "songId": 104,
            "rank": "30"
          },
          {
            "songId": 116,
            "rank": "35"
          },
          {
            "songId": 117,
            "rank": "73"
          },
          {
            "songId": 118,
            "rank": "HP"
          },
          {
            "songId": 119,
            "rank": "HP"
          },
          {
            "songId": 94,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 115,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 105,
            "rank": "AC"
          },
          {
            "songId": 106,
            "rank": "AC"
          },
          {
            "songId": 107,
            "rank": "AC"
          },
          {
            "songId": 108,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "05/04/1971",
        "songRanks": [
          {
            "songId": 85,
            "rank": "1"
          },
          {
            "songId": 101,
            "rank": "2"
          },
          {
            "songId": 102,
            "rank": "3"
          },
          {
            "songId": 93,
            "rank": "4"
          },
          {
            "songId": 113,
            "rank": "5"
          },
          {
            "songId": 100,
            "rank": "6"
          },
          {
            "songId": 87,
            "rank": "7"
          },
          {
            "songId": 89,
            "rank": "8"
          },
          {
            "songId": 97,
            "rank": "9"
          },
          {
            "songId": 112,
            "rank": "10"
          },
          {
            "songId": 104,
            "rank": "11"
          },
          {
            "songId": 78,
            "rank": "12"
          },
          {
            "songId": 88,
            "rank": "13"
          },
          {
            "songId": 120,
            "rank": "14"
          },
          {
            "songId": 103,
            "rank": "15"
          },
          {
            "songId": 109,
            "rank": "16"
          },
          {
            "songId": 99,
            "rank": "17"
          },
          {
            "songId": 115,
            "rank": "18"
          },
          {
            "songId": 72,
            "rank": "19"
          },
          {
            "songId": 118,
            "rank": "22"
          },
          {
            "songId": 117,
            "rank": "25"
          },
          {
            "songId": 111,
            "rank": "31"
          },
          {
            "songId": 121,
            "rank": "32"
          },
          {
            "songId": 122,
            "rank": "38"
          },
          {
            "songId": 119,
            "rank": "41"
          },
          {
            "songId": 123,
            "rank": "HP"
          },
          {
            "songId": 124,
            "rank": "HP"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          },
          {
            "songId": 94,
            "rank": "AC"
          },
          {
            "songId": 105,
            "rank": "AC"
          },
          {
            "songId": 106,
            "rank": "AC"
          },
          {
            "songId": 107,
            "rank": "AC"
          },
          {
            "songId": 108,
            "rank": "AC"
          },
          {
            "songId": 60,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "05/11/1971",
        "songRanks": [
          {
            "songId": 85,
            "rank": "1"
          },
          {
            "songId": 102,
            "rank": "2"
          },
          {
            "songId": 93,
            "rank": "3"
          },
          {
            "songId": 101,
            "rank": "4"
          },
          {
            "songId": 113,
            "rank": "5"
          },
          {
            "songId": 100,
            "rank": "6"
          },
          {
            "songId": 112,
            "rank": "7"
          },
          {
            "songId": 89,
            "rank": "8"
          },
          {
            "songId": 97,
            "rank": "9"
          },
          {
            "songId": 87,
            "rank": "10"
          },
          {
            "songId": 78,
            "rank": "11"
          },
          {
            "songId": 109,
            "rank": "12"
          },
          {
            "songId": 125,
            "rank": "13"
          },
          {
            "songId": 104,
            "rank": "14"
          },
          {
            "songId": 118,
            "rank": "15"
          },
          {
            "songId": 103,
            "rank": "16"
          },
          {
            "songId": 120,
            "rank": "17"
          },
          {
            "songId": 72,
            "rank": "19"
          },
          {
            "songId": 117,
            "rank": "20"
          },
          {
            "songId": 122,
            "rank": "31"
          },
          {
            "songId": 121,
            "rank": "43"
          },
          {
            "songId": 123,
            "rank": "56"
          },
          {
            "songId": 115,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 94,
            "rank": "AC"
          },
          {
            "songId": 126,
            "rank": "AC"
          },
          {
            "songId": 105,
            "rank": "AC"
          },
          {
            "songId": 106,
            "rank": "AC"
          },
          {
            "songId": 107,
            "rank": "AC"
          },
          {
            "songId": 108,
            "rank": "AC"
          },
          {
            "songId": 127,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "05/18/1971",
        "songRanks": [
          {
            "songId": 85,
            "rank": "1"
          },
          {
            "songId": 101,
            "rank": "2"
          },
          {
            "songId": 93,
            "rank": "3"
          },
          {
            "songId": 102,
            "rank": "4"
          },
          {
            "songId": 113,
            "rank": "5"
          },
          {
            "songId": 112,
            "rank": "6"
          },
          {
            "songId": 118,
            "rank": "7"
          },
          {
            "songId": 100,
            "rank": "8"
          },
          {
            "songId": 97,
            "rank": "9"
          },
          {
            "songId": 104,
            "rank": "10"
          },
          {
            "songId": 117,
            "rank": "11"
          },
          {
            "songId": 109,
            "rank": "12"
          },
          {
            "songId": 89,
            "rank": "13"
          },
          {
            "songId": 78,
            "rank": "14"
          },
          {
            "songId": 120,
            "rank": "15"
          },
          {
            "songId": 125,
            "rank": "16"
          },
          {
            "songId": 121,
            "rank": "17"
          },
          {
            "songId": 128,
            "rank": "19"
          },
          {
            "songId": 123,
            "rank": "24"
          },
          {
            "songId": 115,
            "rank": "AC"
          },
          {
            "songId": 126,
            "rank": "AC"
          },
          {
            "songId": 127,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 129,
            "rank": "AC"
          },
          {
            "songId": 105,
            "rank": "AC"
          },
          {
            "songId": 106,
            "rank": "AC"
          },
          {
            "songId": 107,
            "rank": "AC"
          },
          {
            "songId": 108,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 131,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 133,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "05/25/1971",
        "songRanks": [
          {
            "songId": 85,
            "rank": "1"
          },
          {
            "songId": 113,
            "rank": "2"
          },
          {
            "songId": 101,
            "rank": "3"
          },
          {
            "songId": 118,
            "rank": "4"
          },
          {
            "songId": 112,
            "rank": "5"
          },
          {
            "songId": 104,
            "rank": "6"
          },
          {
            "songId": 93,
            "rank": "7"
          },
          {
            "songId": 102,
            "rank": "8"
          },
          {
            "songId": 100,
            "rank": "9"
          },
          {
            "songId": 97,
            "rank": "10"
          },
          {
            "songId": 121,
            "rank": "11"
          },
          {
            "songId": 120,
            "rank": "12"
          },
          {
            "songId": 117,
            "rank": "13"
          },
          {
            "songId": 125,
            "rank": "14"
          },
          {
            "songId": 123,
            "rank": "15"
          },
          {
            "songId": 115,
            "rank": "16"
          },
          {
            "songId": 128,
            "rank": "17"
          },
          {
            "songId": 134,
            "rank": "38"
          },
          {
            "songId": 135,
            "rank": "55"
          },
          {
            "songId": 136,
            "rank": "62"
          },
          {
            "songId": 137,
            "rank": "72"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 69,
            "rank": "AC"
          },
          {
            "songId": 59,
            "rank": "AC"
          },
          {
            "songId": 129,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 126,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 131,
            "rank": "AC"
          },
          {
            "songId": 105,
            "rank": "AC"
          },
          {
            "songId": 106,
            "rank": "AC"
          },
          {
            "songId": 107,
            "rank": "AC"
          },
          {
            "songId": 108,
            "rank": "AC"
          },
          {
            "songId": 127,
            "rank": "AC"
          },
          {
            "songId": 138,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "06/01/1971",
        "songRanks": [
          {
            "songId": 85,
            "rank": "1"
          },
          {
            "songId": 113,
            "rank": "2"
          },
          {
            "songId": 112,
            "rank": "3"
          },
          {
            "songId": 118,
            "rank": "4"
          },
          {
            "songId": 93,
            "rank": "5"
          },
          {
            "songId": 101,
            "rank": "6"
          },
          {
            "songId": 100,
            "rank": "7"
          },
          {
            "songId": 102,
            "rank": "8"
          },
          {
            "songId": 139,
            "rank": "9"
          },
          {
            "songId": 121,
            "rank": "10"
          },
          {
            "songId": 117,
            "rank": "11"
          },
          {
            "songId": 123,
            "rank": "12"
          },
          {
            "songId": 104,
            "rank": "13"
          },
          {
            "songId": 115,
            "rank": "14"
          },
          {
            "songId": 125,
            "rank": "15"
          },
          {
            "songId": 97,
            "rank": "16"
          },
          {
            "songId": 120,
            "rank": "17"
          },
          {
            "songId": 134,
            "rank": "19"
          },
          {
            "songId": 128,
            "rank": "20"
          },
          {
            "songId": 135,
            "rank": "22"
          },
          {
            "songId": 136,
            "rank": "28"
          },
          {
            "songId": 140,
            "rank": "42"
          },
          {
            "songId": 137,
            "rank": "61"
          },
          {
            "songId": 141,
            "rank": "HP"
          },
          {
            "songId": 129,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 126,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 133,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 127,
            "rank": "AC"
          },
          {
            "songId": 131,
            "rank": "AC"
          },
          {
            "songId": 138,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "06/08/1971",
        "songRanks": [
          {
            "songId": 113,
            "rank": "1"
          },
          {
            "songId": 85,
            "rank": "2"
          },
          {
            "songId": 121,
            "rank": "3"
          },
          {
            "songId": 123,
            "rank": "4"
          },
          {
            "songId": 104,
            "rank": "5"
          },
          {
            "songId": 118,
            "rank": "6"
          },
          {
            "songId": 112,
            "rank": "7"
          },
          {
            "songId": 128,
            "rank": "8"
          },
          {
            "songId": 139,
            "rank": "9"
          },
          {
            "songId": 129,
            "rank": "10"
          },
          {
            "songId": 142,
            "rank": "11"
          },
          {
            "songId": 134,
            "rank": "12"
          },
          {
            "songId": 115,
            "rank": "13"
          },
          {
            "songId": 93,
            "rank": "14"
          },
          {
            "songId": 100,
            "rank": "15"
          },
          {
            "songId": 125,
            "rank": "16"
          },
          {
            "songId": 136,
            "rank": "19"
          },
          {
            "songId": 143,
            "rank": "23"
          },
          {
            "songId": 137,
            "rank": "27"
          },
          {
            "songId": 140,
            "rank": "29"
          },
          {
            "songId": 144,
            "rank": "38"
          },
          {
            "songId": 141,
            "rank": "46"
          },
          {
            "songId": 145,
            "rank": "53"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 126,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 127,
            "rank": "AC"
          },
          {
            "songId": 131,
            "rank": "AC"
          },
          {
            "songId": 138,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "06/15/1971",
        "songRanks": [
          {
            "songId": 113,
            "rank": "1"
          },
          {
            "songId": 134,
            "rank": "2"
          },
          {
            "songId": 129,
            "rank": "3"
          },
          {
            "songId": 139,
            "rank": "4"
          },
          {
            "songId": 123,
            "rank": "5"
          },
          {
            "songId": 125,
            "rank": "6"
          },
          {
            "songId": 142,
            "rank": "7"
          },
          {
            "songId": 112,
            "rank": "8"
          },
          {
            "songId": 85,
            "rank": "9"
          },
          {
            "songId": 104,
            "rank": "10"
          },
          {
            "songId": 136,
            "rank": "11"
          },
          {
            "songId": 147,
            "rank": "12"
          },
          {
            "songId": 121,
            "rank": "13"
          },
          {
            "songId": 118,
            "rank": "14"
          },
          {
            "songId": 128,
            "rank": "15"
          },
          {
            "songId": 148,
            "rank": "16"
          },
          {
            "songId": 141,
            "rank": "17"
          },
          {
            "songId": 115,
            "rank": "18"
          },
          {
            "songId": 149,
            "rank": "20"
          },
          {
            "songId": 135,
            "rank": "22"
          },
          {
            "songId": 143,
            "rank": "29"
          },
          {
            "songId": 144,
            "rank": "33"
          },
          {
            "songId": 145,
            "rank": "41"
          },
          {
            "songId": 150,
            "rank": "42"
          },
          {
            "songId": 151,
            "rank": "51"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 126,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 131,
            "rank": "AC"
          },
          {
            "songId": 138,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "06/22/1971",
        "songRanks": [
          {
            "songId": 129,
            "rank": "1"
          },
          {
            "songId": 134,
            "rank": "2"
          },
          {
            "songId": 123,
            "rank": "3"
          },
          {
            "songId": 136,
            "rank": "4"
          },
          {
            "songId": 113,
            "rank": "5"
          },
          {
            "songId": 141,
            "rank": "6"
          },
          {
            "songId": 104,
            "rank": "7"
          },
          {
            "songId": 139,
            "rank": "8"
          },
          {
            "songId": 112,
            "rank": "9"
          },
          {
            "songId": 121,
            "rank": "10"
          },
          {
            "songId": 125,
            "rank": "11"
          },
          {
            "songId": 145,
            "rank": "12"
          },
          {
            "songId": 115,
            "rank": "13"
          },
          {
            "songId": 118,
            "rank": "14"
          },
          {
            "songId": 137,
            "rank": "15"
          },
          {
            "songId": 85,
            "rank": "16"
          },
          {
            "songId": 143,
            "rank": "17"
          },
          {
            "songId": 150,
            "rank": "23"
          },
          {
            "songId": 148,
            "rank": "24"
          },
          {
            "songId": 149,
            "rank": "27"
          },
          {
            "songId": 144,
            "rank": "31"
          },
          {
            "songId": 152,
            "rank": "34"
          },
          {
            "songId": 153,
            "rank": "46"
          },
          {
            "songId": 151,
            "rank": "57"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 126,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 131,
            "rank": "AC"
          },
          {
            "songId": 138,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "06/29/1971",
        "songRanks": [
          {
            "songId": 129,
            "rank": "1"
          },
          {
            "songId": 134,
            "rank": "2"
          },
          {
            "songId": 136,
            "rank": "3"
          },
          {
            "songId": 123,
            "rank": "4"
          },
          {
            "songId": 141,
            "rank": "5"
          },
          {
            "songId": 104,
            "rank": "6"
          },
          {
            "songId": 113,
            "rank": "7"
          },
          {
            "songId": 139,
            "rank": "8"
          },
          {
            "songId": 147,
            "rank": "9"
          },
          {
            "songId": 121,
            "rank": "10"
          },
          {
            "songId": 115,
            "rank": "11"
          },
          {
            "songId": 143,
            "rank": "12"
          },
          {
            "songId": 145,
            "rank": "13"
          },
          {
            "songId": 112,
            "rank": "14"
          },
          {
            "songId": 126,
            "rank": "15"
          },
          {
            "songId": 137,
            "rank": "18"
          },
          {
            "songId": 149,
            "rank": "19"
          },
          {
            "songId": 150,
            "rank": "22"
          },
          {
            "songId": 154,
            "rank": "23"
          },
          {
            "songId": 125,
            "rank": "27"
          },
          {
            "songId": 155,
            "rank": "30"
          },
          {
            "songId": 153,
            "rank": "33"
          },
          {
            "songId": 152,
            "rank": "34"
          },
          {
            "songId": 156,
            "rank": "46"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 131,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 138,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 157,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "07/06/1971",
        "songRanks": [
          {
            "songId": 134,
            "rank": "1"
          },
          {
            "songId": 129,
            "rank": "2"
          },
          {
            "songId": 136,
            "rank": "3"
          },
          {
            "songId": 141,
            "rank": "4"
          },
          {
            "songId": 139,
            "rank": "5"
          },
          {
            "songId": 143,
            "rank": "6"
          },
          {
            "songId": 147,
            "rank": "7"
          },
          {
            "songId": 123,
            "rank": "8"
          },
          {
            "songId": 150,
            "rank": "9"
          },
          {
            "songId": 149,
            "rank": "10"
          },
          {
            "songId": 145,
            "rank": "11"
          },
          {
            "songId": 125,
            "rank": "12"
          },
          {
            "songId": 154,
            "rank": "13"
          },
          {
            "songId": 126,
            "rank": "14"
          },
          {
            "songId": 113,
            "rank": "15"
          },
          {
            "songId": 121,
            "rank": "16"
          },
          {
            "songId": 152,
            "rank": "22"
          },
          {
            "songId": 137,
            "rank": "23"
          },
          {
            "songId": 155,
            "rank": "25"
          },
          {
            "songId": 158,
            "rank": "26"
          },
          {
            "songId": 159,
            "rank": "37"
          },
          {
            "songId": 156,
            "rank": "50"
          },
          {
            "songId": 160,
            "rank": "60"
          },
          {
            "songId": 161,
            "rank": "67"
          },
          {
            "songId": 162,
            "rank": "HP"
          },
          {
            "songId": 163,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 131,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 138,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "07/13/1971",
        "songRanks": [
          {
            "songId": 129,
            "rank": "1"
          },
          {
            "songId": 134,
            "rank": "2"
          },
          {
            "songId": 136,
            "rank": "3"
          },
          {
            "songId": 139,
            "rank": "4"
          },
          {
            "songId": 141,
            "rank": "5"
          },
          {
            "songId": 147,
            "rank": "6"
          },
          {
            "songId": 123,
            "rank": "7"
          },
          {
            "songId": 126,
            "rank": "8"
          },
          {
            "songId": 145,
            "rank": "9"
          },
          {
            "songId": 143,
            "rank": "10"
          },
          {
            "songId": 164,
            "rank": "11"
          },
          {
            "songId": 150,
            "rank": "12"
          },
          {
            "songId": 154,
            "rank": "13"
          },
          {
            "songId": 113,
            "rank": "14"
          },
          {
            "songId": 121,
            "rank": "15"
          },
          {
            "songId": 152,
            "rank": "16"
          },
          {
            "songId": 149,
            "rank": "17"
          },
          {
            "songId": 155,
            "rank": "18"
          },
          {
            "songId": 158,
            "rank": "19"
          },
          {
            "songId": 153,
            "rank": "22"
          },
          {
            "songId": 156,
            "rank": "29"
          },
          {
            "songId": 161,
            "rank": "34"
          },
          {
            "songId": 160,
            "rank": "49"
          },
          {
            "songId": 159,
            "rank": "53"
          },
          {
            "songId": 162,
            "rank": "HP"
          },
          {
            "songId": 163,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 138,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "07/20/1971",
        "songRanks": [
          {
            "songId": 129,
            "rank": "1"
          },
          {
            "songId": 136,
            "rank": "2"
          },
          {
            "songId": 134,
            "rank": "3"
          },
          {
            "songId": 139,
            "rank": "4"
          },
          {
            "songId": 141,
            "rank": "5"
          },
          {
            "songId": 126,
            "rank": "6"
          },
          {
            "songId": 145,
            "rank": "7"
          },
          {
            "songId": 150,
            "rank": "8"
          },
          {
            "songId": 143,
            "rank": "9"
          },
          {
            "songId": 123,
            "rank": "10"
          },
          {
            "songId": 164,
            "rank": "11"
          },
          {
            "songId": 152,
            "rank": "12"
          },
          {
            "songId": 158,
            "rank": "13"
          },
          {
            "songId": 147,
            "rank": "14"
          },
          {
            "songId": 154,
            "rank": "15"
          },
          {
            "songId": 155,
            "rank": "16"
          },
          {
            "songId": 161,
            "rank": "17"
          },
          {
            "songId": 156,
            "rank": "18"
          },
          {
            "songId": 153,
            "rank": "19"
          },
          {
            "songId": 166,
            "rank": "24"
          },
          {
            "songId": 167,
            "rank": "25"
          },
          {
            "songId": 160,
            "rank": "29"
          },
          {
            "songId": 168,
            "rank": "31"
          },
          {
            "songId": 169,
            "rank": "35"
          },
          {
            "songId": 170,
            "rank": "HP"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 163,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 24,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 23,
            "rank": "AC"
          },
          {
            "songId": 114,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 171,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "07/27/1971",
        "songRanks": [
          {
            "songId": 136,
            "rank": "1"
          },
          {
            "songId": 141,
            "rank": "2"
          },
          {
            "songId": 150,
            "rank": "3"
          },
          {
            "songId": 129,
            "rank": "4"
          },
          {
            "songId": 139,
            "rank": "5"
          },
          {
            "songId": 126,
            "rank": "6"
          },
          {
            "songId": 164,
            "rank": "7"
          },
          {
            "songId": 158,
            "rank": "8"
          },
          {
            "songId": 161,
            "rank": "9"
          },
          {
            "songId": 134,
            "rank": "10"
          },
          {
            "songId": 155,
            "rank": "11"
          },
          {
            "songId": 152,
            "rank": "12"
          },
          {
            "songId": 149,
            "rank": "13"
          },
          {
            "songId": 153,
            "rank": "14"
          },
          {
            "songId": 143,
            "rank": "16"
          },
          {
            "songId": 156,
            "rank": "17"
          },
          {
            "songId": 147,
            "rank": "18"
          },
          {
            "songId": 166,
            "rank": "19"
          },
          {
            "songId": 167,
            "rank": "20"
          },
          {
            "songId": 172,
            "rank": "22"
          },
          {
            "songId": 145,
            "rank": "23"
          },
          {
            "songId": 169,
            "rank": "24"
          },
          {
            "songId": 173,
            "rank": "35"
          },
          {
            "songId": 174,
            "rank": "40"
          },
          {
            "songId": 175,
            "rank": "42"
          },
          {
            "songId": 168,
            "rank": "56"
          },
          {
            "songId": 170,
            "rank": "HP"
          },
          {
            "songId": 176,
            "rank": "HP"
          },
          {
            "songId": 163,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 178,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "08/03/1971",
        "songRanks": [
          {
            "songId": 164,
            "rank": "1"
          },
          {
            "songId": 136,
            "rank": "2"
          },
          {
            "songId": 129,
            "rank": "3"
          },
          {
            "songId": 161,
            "rank": "4"
          },
          {
            "songId": 150,
            "rank": "5"
          },
          {
            "songId": 141,
            "rank": "6"
          },
          {
            "songId": 139,
            "rank": "7"
          },
          {
            "songId": 158,
            "rank": "8"
          },
          {
            "songId": 126,
            "rank": "9"
          },
          {
            "songId": 174,
            "rank": "10"
          },
          {
            "songId": 152,
            "rank": "11"
          },
          {
            "songId": 134,
            "rank": "12"
          },
          {
            "songId": 155,
            "rank": "13"
          },
          {
            "songId": 167,
            "rank": "14"
          },
          {
            "songId": 166,
            "rank": "15"
          },
          {
            "songId": 159,
            "rank": "16"
          },
          {
            "songId": 160,
            "rank": "17"
          },
          {
            "songId": 156,
            "rank": "18"
          },
          {
            "songId": 169,
            "rank": "24"
          },
          {
            "songId": 179,
            "rank": "26"
          },
          {
            "songId": 175,
            "rank": "27"
          },
          {
            "songId": 172,
            "rank": "28"
          },
          {
            "songId": 168,
            "rank": "32"
          },
          {
            "songId": 180,
            "rank": "35"
          },
          {
            "songId": 170,
            "rank": "36"
          },
          {
            "songId": 181,
            "rank": "40"
          },
          {
            "songId": 176,
            "rank": "61"
          },
          {
            "songId": 163,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 178,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 40,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "08/10/1971",
        "songRanks": [
          {
            "songId": 161,
            "rank": "1"
          },
          {
            "songId": 155,
            "rank": "2"
          },
          {
            "songId": 126,
            "rank": "3"
          },
          {
            "songId": 136,
            "rank": "4"
          },
          {
            "songId": 150,
            "rank": "5"
          },
          {
            "songId": 158,
            "rank": "6"
          },
          {
            "songId": 156,
            "rank": "7"
          },
          {
            "songId": 129,
            "rank": "8"
          },
          {
            "songId": 139,
            "rank": "9"
          },
          {
            "songId": 164,
            "rank": "10"
          },
          {
            "songId": 167,
            "rank": "11"
          },
          {
            "songId": 141,
            "rank": "12"
          },
          {
            "songId": 174,
            "rank": "13"
          },
          {
            "songId": 175,
            "rank": "14"
          },
          {
            "songId": 166,
            "rank": "15"
          },
          {
            "songId": 160,
            "rank": "16"
          },
          {
            "songId": 159,
            "rank": "17"
          },
          {
            "songId": 152,
            "rank": "18"
          },
          {
            "songId": 182,
            "rank": "19"
          },
          {
            "songId": 169,
            "rank": "20"
          },
          {
            "songId": 180,
            "rank": "21"
          },
          {
            "songId": 168,
            "rank": "23"
          },
          {
            "songId": 183,
            "rank": "25"
          },
          {
            "songId": 179,
            "rank": "26"
          },
          {
            "songId": 173,
            "rank": "29"
          },
          {
            "songId": 170,
            "rank": "33"
          },
          {
            "songId": 181,
            "rank": "40"
          },
          {
            "songId": 184,
            "rank": "52"
          },
          {
            "songId": 185,
            "rank": "58"
          },
          {
            "songId": 176,
            "rank": "80"
          },
          {
            "songId": 163,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 178,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 187,
            "rank": "AC"
          },
          {
            "songId": 188,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "08/17/1971",
        "songRanks": [
          {
            "songId": 161,
            "rank": "1"
          },
          {
            "songId": 158,
            "rank": "2"
          },
          {
            "songId": 167,
            "rank": "3"
          },
          {
            "songId": 174,
            "rank": "4"
          },
          {
            "songId": 156,
            "rank": "5"
          },
          {
            "songId": 136,
            "rank": "6"
          },
          {
            "songId": 155,
            "rank": "7"
          },
          {
            "songId": 126,
            "rank": "8"
          },
          {
            "songId": 139,
            "rank": "9"
          },
          {
            "songId": 164,
            "rank": "10"
          },
          {
            "songId": 160,
            "rank": "11"
          },
          {
            "songId": 150,
            "rank": "12"
          },
          {
            "songId": 175,
            "rank": "13"
          },
          {
            "songId": 129,
            "rank": "14"
          },
          {
            "songId": 179,
            "rank": "15"
          },
          {
            "songId": 182,
            "rank": "16"
          },
          {
            "songId": 159,
            "rank": "17"
          },
          {
            "songId": 168,
            "rank": "19"
          },
          {
            "songId": 173,
            "rank": "21"
          },
          {
            "songId": 170,
            "rank": "24"
          },
          {
            "songId": 185,
            "rank": "25"
          },
          {
            "songId": 183,
            "rank": "27"
          },
          {
            "songId": 180,
            "rank": "28"
          },
          {
            "songId": 176,
            "rank": "30"
          },
          {
            "songId": 184,
            "rank": "39"
          },
          {
            "songId": 189,
            "rank": "68"
          },
          {
            "songId": 190,
            "rank": "HP"
          },
          {
            "songId": 191,
            "rank": "HP"
          },
          {
            "songId": 163,
            "rank": "AC"
          },
          {
            "songId": 187,
            "rank": "AC"
          },
          {
            "songId": 188,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 178,
            "rank": "AC"
          },
          {
            "songId": 181,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
          {
            "songId": 192,
            "rank": "AC"
          },
          {
            "songId": 193,
            "rank": "AC"
          },
          {
            "songId": 194,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 196,
            "rank": "AC"
          },
          {
            "songId": 197,
            "rank": "AC"
          },
          {
            "songId": 198,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "08/24/1971",
        "songRanks": [
          {
            "songId": 167,
            "rank": "1"
          },
          {
            "songId": 161,
            "rank": "2"
          },
          {
            "songId": 156,
            "rank": "3"
          },
          {
            "songId": 158,
            "rank": "4"
          },
          {
            "songId": 174,
            "rank": "5"
          },
          {
            "songId": 183,
            "rank": "6"
          },
          {
            "songId": 175,
            "rank": "7"
          },
          {
            "songId": 179,
            "rank": "8"
          },
          {
            "songId": 182,
            "rank": "9"
          },
          {
            "songId": 163,
            "rank": "10"
          },
          {
            "songId": 164,
            "rank": "11"
          },
          {
            "songId": 155,
            "rank": "12"
          },
          {
            "songId": 159,
            "rank": "13"
          },
          {
            "songId": 173,
            "rank": "14"
          },
          {
            "songId": 166,
            "rank": "16"
          },
          {
            "songId": 169,
            "rank": "17"
          },
          {
            "songId": 126,
            "rank": "18"
          },
          {
            "songId": 168,
            "rank": "20"
          },
          {
            "songId": 185,
            "rank": "22"
          },
          {
            "songId": 176,
            "rank": "25"
          },
          {
            "songId": 170,
            "rank": "27"
          },
          {
            "songId": 180,
            "rank": "30"
          },
          {
            "songId": 191,
            "rank": "32"
          },
          {
            "songId": 184,
            "rank": "35"
          },
          {
            "songId": 199,
            "rank": "37"
          },
          {
            "songId": 190,
            "rank": "52"
          },
          {
            "songId": 200,
            "rank": "61"
          },
          {
            "songId": 201,
            "rank": "62"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 197,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 194,
            "rank": "AC"
          },
          {
            "songId": 192,
            "rank": "AC"
          },
          {
            "songId": 196,
            "rank": "AC"
          },
          {
            "songId": 193,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 178,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 188,
            "rank": "AC"
          },
          {
            "songId": 198,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 187,
            "rank": "AC"
          },
          {
            "songId": 181,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "08/31/1971",
        "songRanks": [
          {
            "songId": 167,
            "rank": "1"
          },
          {
            "songId": 161,
            "rank": "2"
          },
          {
            "songId": 156,
            "rank": "3"
          },
          {
            "songId": 183,
            "rank": "4"
          },
          {
            "songId": 175,
            "rank": "5"
          },
          {
            "songId": 179,
            "rank": "6"
          },
          {
            "songId": 158,
            "rank": "7"
          },
          {
            "songId": 174,
            "rank": "8"
          },
          {
            "songId": 163,
            "rank": "9"
          },
          {
            "songId": 185,
            "rank": "10"
          },
          {
            "songId": 159,
            "rank": "11"
          },
          {
            "songId": 182,
            "rank": "12"
          },
          {
            "songId": 164,
            "rank": "13"
          },
          {
            "songId": 155,
            "rank": "14"
          },
          {
            "songId": 136,
            "rank": "17"
          },
          {
            "songId": 126,
            "rank": "18"
          },
          {
            "songId": 202,
            "rank": "19"
          },
          {
            "songId": 176,
            "rank": "22"
          },
          {
            "songId": 191,
            "rank": "23"
          },
          {
            "songId": 190,
            "rank": "29"
          },
          {
            "songId": 173,
            "rank": "30"
          },
          {
            "songId": 168,
            "rank": "31"
          },
          {
            "songId": 203,
            "rank": "37"
          },
          {
            "songId": 204,
            "rank": "41"
          },
          {
            "songId": 186,
            "rank": "46"
          },
          {
            "songId": 201,
            "rank": "54"
          },
          {
            "songId": 200,
            "rank": "63"
          },
          {
            "songId": 205,
            "rank": "HP"
          },
          {
            "songId": 206,
            "rank": "HP"
          },
          {
            "songId": 192,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 178,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 198,
            "rank": "AC"
          },
          {
            "songId": 193,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "09/07/1971",
        "songRanks": [
          {
            "songId": 163,
            "rank": "1"
          },
          {
            "songId": 167,
            "rank": "2"
          },
          {
            "songId": 156,
            "rank": "3"
          },
          {
            "songId": 183,
            "rank": "4"
          },
          {
            "songId": 185,
            "rank": "5"
          },
          {
            "songId": 179,
            "rank": "6"
          },
          {
            "songId": 182,
            "rank": "7"
          },
          {
            "songId": 161,
            "rank": "8"
          },
          {
            "songId": 191,
            "rank": "9"
          },
          {
            "songId": 159,
            "rank": "10"
          },
          {
            "songId": 207,
            "rank": "11"
          },
          {
            "songId": 178,
            "rank": "12"
          },
          {
            "songId": 175,
            "rank": "13"
          },
          {
            "songId": 190,
            "rank": "14"
          },
          {
            "songId": 202,
            "rank": "15"
          },
          {
            "songId": 173,
            "rank": "16"
          },
          {
            "songId": 176,
            "rank": "17"
          },
          {
            "songId": 184,
            "rank": "19"
          },
          {
            "songId": 174,
            "rank": "20"
          },
          {
            "songId": 203,
            "rank": "25"
          },
          {
            "songId": 186,
            "rank": "29"
          },
          {
            "songId": 204,
            "rank": "30"
          },
          {
            "songId": 201,
            "rank": "34"
          },
          {
            "songId": 205,
            "rank": "37"
          },
          {
            "songId": 208,
            "rank": "45"
          },
          {
            "songId": 206,
            "rank": "53"
          },
          {
            "songId": 209,
            "rank": "HP"
          },
          {
            "songId": 210,
            "rank": "HP"
          },
          {
            "songId": 211,
            "rank": "HP"
          },
          {
            "songId": 192,
            "rank": "AC"
          },
          {
            "songId": 197,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 198,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 212,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "09/14/1971",
        "songRanks": [
          {
            "songId": 163,
            "rank": "1"
          },
          {
            "songId": 185,
            "rank": "2"
          },
          {
            "songId": 167,
            "rank": "3"
          },
          {
            "songId": 178,
            "rank": "4"
          },
          {
            "songId": 183,
            "rank": "5"
          },
          {
            "songId": 179,
            "rank": "6"
          },
          {
            "songId": 191,
            "rank": "7"
          },
          {
            "songId": 182,
            "rank": "8"
          },
          {
            "songId": 190,
            "rank": "9"
          },
          {
            "songId": 207,
            "rank": "10"
          },
          {
            "songId": 173,
            "rank": "11"
          },
          {
            "songId": 202,
            "rank": "12"
          },
          {
            "songId": 161,
            "rank": "13"
          },
          {
            "songId": 156,
            "rank": "14"
          },
          {
            "songId": 175,
            "rank": "15"
          },
          {
            "songId": 176,
            "rank": "16"
          },
          {
            "songId": 204,
            "rank": "17"
          },
          {
            "songId": 203,
            "rank": "18"
          },
          {
            "songId": 184,
            "rank": "19"
          },
          {
            "songId": 186,
            "rank": "21"
          },
          {
            "songId": 198,
            "rank": "24"
          },
          {
            "songId": 206,
            "rank": "28"
          },
          {
            "songId": 189,
            "rank": "33"
          },
          {
            "songId": 208,
            "rank": "36"
          },
          {
            "songId": 211,
            "rank": "62"
          },
          {
            "songId": 209,
            "rank": "64"
          },
          {
            "songId": 210,
            "rank": "HP"
          },
          {
            "songId": 165,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 192,
            "rank": "AC"
          },
          {
            "songId": 197,
            "rank": "AC"
          },
          {
            "songId": 212,
            "rank": "AC"
          },
          {
            "songId": 132,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 130,
            "rank": "AC"
          },
        ]
      },
      {
        "weekOf": "09/21/1971",
        "songRanks": [
          {
            "songId": 163,
            "rank": "1"
          },
          {
            "songId": 178,
            "rank": "2"
          },
          {
            "songId": 185,
            "rank": "3"
          },
          {
            "songId": 191,
            "rank": "4"
          },
          {
            "songId": 183,
            "rank": "5"
          },
          {
            "songId": 167,
            "rank": "6"
          },
          {
            "songId": 190,
            "rank": "7"
          },
          {
            "songId": 182,
            "rank": "8"
          },
          {
            "songId": 179,
            "rank": "9"
          },
          {
            "songId": 207,
            "rank": "10"
          },
          {
            "songId": 202,
            "rank": "11"
          },
          {
            "songId": 175,
            "rank": "12"
          },
          {
            "songId": 203,
            "rank": "13"
          },
          {
            "songId": 156,
            "rank": "14"
          },
          {
            "songId": 161,
            "rank": "15"
          },
          {
            "songId": 173,
            "rank": "16"
          },
          {
            "songId": 176,
            "rank": "17"
          },
          {
            "songId": 208,
            "rank": "27"
          },
          {
            "songId": 209,
            "rank": "29"
          },
          {
            "songId": 189,
            "rank": "32"
          },
          {
            "songId": 206,
            "rank": "33"
          },
          {
            "songId": 210,
            "rank": "40"
          },
          {
            "songId": 211,
            "rank": "50"
          },
          {
            "songId": 214,
            "rank": "HP"
          },
          {
            "songId": 215,
            "rank": "HP"
          },
          {
            "songId": 216,
            "rank": "HP"
          },
          {
            "songId": 217,
            "rank": "AC"
          },
          {
            "songId": 218,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 192,
            "rank": "AC"
          },
          {
            "songId": 198,
            "rank": "AC"
          },
          {
            "songId": 212,
            "rank": "AC"
          },
          {
            "songId": 165,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "09/28/1971",
        "songRanks": [
          {
            "songId": 178,
            "rank": "1"
          },
          {
            "songId": 185,
            "rank": "2"
          },
          {
            "songId": 163,
            "rank": "3"
          },
          {
            "songId": 191,
            "rank": "4"
          },
          {
            "songId": 190,
            "rank": "5"
          },
          {
            "songId": 183,
            "rank": "6"
          },
          {
            "songId": 182,
            "rank": "7"
          },
          {
            "songId": 179,
            "rank": "8"
          },
          {
            "songId": 207,
            "rank": "9"
          },
          {
            "songId": 167,
            "rank": "10"
          },
          {
            "songId": 184,
            "rank": "11"
          },
          {
            "songId": 206,
            "rank": "12"
          },
          {
            "songId": 208,
            "rank": "13"
          },
          {
            "songId": 173,
            "rank": "14"
          },
          {
            "songId": 202,
            "rank": "15"
          },
          {
            "songId": 203,
            "rank": "16"
          },
          {
            "songId": 156,
            "rank": "17"
          },
          {
            "songId": 204,
            "rank": "18"
          },
          {
            "songId": 176,
            "rank": "19"
          },
          {
            "songId": 189,
            "rank": "21"
          },
          {
            "songId": 201,
            "rank": "22"
          },
          {
            "songId": 210,
            "rank": "27"
          },
          {
            "songId": 211,
            "rank": "31"
          },
          {
            "songId": 214,
            "rank": "41"
          },
          {
            "songId": 215,
            "rank": "50"
          },
          {
            "songId": 219,
            "rank": "61"
          },
          {
            "songId": 220,
            "rank": "62"
          },
          {
            "songId": 216,
            "rank": "HP"
          },
          {
            "songId": 221,
            "rank": "HP"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 212,
            "rank": "AC"
          },
          {
            "songId": 192,
            "rank": "AC"
          },
          {
            "songId": 217,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 218,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "10/05/1971",
        "songRanks": [
          {
            "songId": 178,
            "rank": "1"
          },
          {
            "songId": 191,
            "rank": "2"
          },
          {
            "songId": 185,
            "rank": "3"
          },
          {
            "songId": 163,
            "rank": "4"
          },
          {
            "songId": 182,
            "rank": "5"
          },
          {
            "songId": 206,
            "rank": "6"
          },
          {
            "songId": 190,
            "rank": "7"
          },
          {
            "songId": 202,
            "rank": "8"
          },
          {
            "songId": 208,
            "rank": "9"
          },
          {
            "songId": 204,
            "rank": "10"
          },
          {
            "songId": 212,
            "rank": "11"
          },
          {
            "songId": 176,
            "rank": "12"
          },
          {
            "songId": 203,
            "rank": "13"
          },
          {
            "songId": 183,
            "rank": "14"
          },
          {
            "songId": 223,
            "rank": "15"
          },
          {
            "songId": 179,
            "rank": "17"
          },
          {
            "songId": 189,
            "rank": "20"
          },
          {
            "songId": 210,
            "rank": "22"
          },
          {
            "songId": 224,
            "rank": "38"
          },
          {
            "songId": 214,
            "rank": "39"
          },
          {
            "songId": 225,
            "rank": "50"
          },
          {
            "songId": 226,
            "rank": "51"
          },
          {
            "songId": 219,
            "rank": "59"
          },
          {
            "songId": 220,
            "rank": "68"
          },
          {
            "songId": 221,
            "rank": "HP"
          },
          {
            "songId": 227,
            "rank": "HP"
          },
          {
            "songId": 192,
            "rank": "AC"
          },
          {
            "songId": 217,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 218,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "10/12/1971",
        "songRanks": [
          {
            "songId": 178,
            "rank": "1"
          },
          {
            "songId": 191,
            "rank": "2"
          },
          {
            "songId": 212,
            "rank": "3"
          },
          {
            "songId": 206,
            "rank": "4"
          },
          {
            "songId": 185,
            "rank": "5"
          },
          {
            "songId": 190,
            "rank": "6"
          },
          {
            "songId": 163,
            "rank": "7"
          },
          {
            "songId": 202,
            "rank": "8"
          },
          {
            "songId": 203,
            "rank": "9"
          },
          {
            "songId": 223,
            "rank": "10"
          },
          {
            "songId": 204,
            "rank": "11"
          },
          {
            "songId": 208,
            "rank": "12"
          },
          {
            "songId": 228,
            "rank": "13"
          },
          {
            "songId": 210,
            "rank": "14"
          },
          {
            "songId": 183,
            "rank": "15"
          },
          {
            "songId": 229,
            "rank": "16"
          },
          {
            "songId": 182,
            "rank": "19"
          },
          {
            "songId": 192,
            "rank": "20"
          },
          {
            "songId": 225,
            "rank": "25"
          },
          {
            "songId": 219,
            "rank": "31"
          },
          {
            "songId": 224,
            "rank": "32"
          },
          {
            "songId": 221,
            "rank": "34"
          },
          {
            "songId": 220,
            "rank": "39"
          },
          {
            "songId": 226,
            "rank": "42"
          },
          {
            "songId": 227,
            "rank": "47"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 217,
            "rank": "AC"
          },
          {
            "songId": 218,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 230,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "10/19/1971",
        "songRanks": [
          {
            "songId": 178,
            "rank": "1"
          },
          {
            "songId": 206,
            "rank": "2"
          },
          {
            "songId": 191,
            "rank": "3"
          },
          {
            "songId": 185,
            "rank": "4"
          },
          {
            "songId": 208,
            "rank": "5"
          },
          {
            "songId": 212,
            "rank": "6"
          },
          {
            "songId": 190,
            "rank": "7"
          },
          {
            "songId": 163,
            "rank": "8"
          },
          {
            "songId": 210,
            "rank": "9"
          },
          {
            "songId": 225,
            "rank": "10"
          },
          {
            "songId": 202,
            "rank": "11"
          },
          {
            "songId": 230,
            "rank": "12"
          },
          {
            "songId": 224,
            "rank": "13"
          },
          {
            "songId": 223,
            "rank": "14"
          },
          {
            "songId": 182,
            "rank": "15"
          },
          {
            "songId": 192,
            "rank": "16"
          },
          {
            "songId": 203,
            "rank": "17"
          },
          {
            "songId": 204,
            "rank": "18"
          },
          {
            "songId": 229,
            "rank": "20"
          },
          {
            "songId": 227,
            "rank": "25"
          },
          {
            "songId": 220,
            "rank": "29"
          },
          {
            "songId": 231,
            "rank": "HP"
          },
          {
            "songId": 219,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 218,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "10/26/1971",
        "songRanks": [
          {
            "songId": 178,
            "rank": "1"
          },
          {
            "songId": 206,
            "rank": "2"
          },
          {
            "songId": 212,
            "rank": "3"
          },
          {
            "songId": 225,
            "rank": "4"
          },
          {
            "songId": 191,
            "rank": "5"
          },
          {
            "songId": 208,
            "rank": "6"
          },
          {
            "songId": 230,
            "rank": "7"
          },
          {
            "songId": 192,
            "rank": "8"
          },
          {
            "songId": 185,
            "rank": "9"
          },
          {
            "songId": 223,
            "rank": "10"
          },
          {
            "songId": 190,
            "rank": "11"
          },
          {
            "songId": 210,
            "rank": "12"
          },
          {
            "songId": 224,
            "rank": "13"
          },
          {
            "songId": 229,
            "rank": "14"
          },
          {
            "songId": 163,
            "rank": "15"
          },
          {
            "songId": 202,
            "rank": "16"
          },
          {
            "songId": 204,
            "rank": "17"
          },
          {
            "songId": 203,
            "rank": "18"
          },
          {
            "songId": 220,
            "rank": "20"
          },
          {
            "songId": 219,
            "rank": "21"
          },
          {
            "songId": 231,
            "rank": "22"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "11/02/1971",
        "songRanks": [
          {
            "songId": 178,
            "rank": "1"
          },
          {
            "songId": 225,
            "rank": "2"
          },
          {
            "songId": 212,
            "rank": "3"
          },
          {
            "songId": 206,
            "rank": "4"
          },
          {
            "songId": 192,
            "rank": "5"
          },
          {
            "songId": 230,
            "rank": "6"
          },
          {
            "songId": 191,
            "rank": "7"
          },
          {
            "songId": 224,
            "rank": "8"
          },
          {
            "songId": 223,
            "rank": "9"
          },
          {
            "songId": 219,
            "rank": "10"
          },
          {
            "songId": 229,
            "rank": "11"
          },
          {
            "songId": 190,
            "rank": "12"
          },
          {
            "songId": 208,
            "rank": "13"
          },
          {
            "songId": 227,
            "rank": "14"
          },
          {
            "songId": 185,
            "rank": "17"
          },
          {
            "songId": 232,
            "rank": "18"
          },
          {
            "songId": 231,
            "rank": "19"
          },
          {
            "songId": 233,
            "rank": "20"
          },
          {
            "songId": 234,
            "rank": "35"
          },
          {
            "songId": 235,
            "rank": "52"
          },
          {
            "songId": 236,
            "rank": "66"
          },
          {
            "songId": 237,
            "rank": "HP"
          },
          {
            "songId": 238,
            "rank": "HP"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "11/09/1971",
        "songRanks": [
          {
            "songId": 225,
            "rank": "1"
          },
          {
            "songId": 212,
            "rank": "2"
          },
          {
            "songId": 178,
            "rank": "3"
          },
          {
            "songId": 230,
            "rank": "4"
          },
          {
            "songId": 192,
            "rank": "5"
          },
          {
            "songId": 206,
            "rank": "6"
          },
          {
            "songId": 224,
            "rank": "7"
          },
          {
            "songId": 191,
            "rank": "8"
          },
          {
            "songId": 219,
            "rank": "9"
          },
          {
            "songId": 208,
            "rank": "10"
          },
          {
            "songId": 229,
            "rank": "11"
          },
          {
            "songId": 223,
            "rank": "12"
          },
          {
            "songId": 231,
            "rank": "13"
          },
          {
            "songId": 233,
            "rank": "14"
          },
          {
            "songId": 227,
            "rank": "15"
          },
          {
            "songId": 232,
            "rank": "20"
          },
          {
            "songId": 234,
            "rank": "22"
          },
          {
            "songId": 235,
            "rank": "25"
          },
          {
            "songId": 240,
            "rank": "30"
          },
          {
            "songId": 241,
            "rank": "38"
          },
          {
            "songId": 238,
            "rank": "HP"
          },
          {
            "songId": 242,
            "rank": "HP"
          },
          {
            "songId": 243,
            "rank": "HP"
          },
          {
            "songId": 244,
            "rank": "AC"
          },
          {
            "songId": 245,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "11/16/1971",
        "songRanks": [
          {
            "songId": 225,
            "rank": "1"
          },
          {
            "songId": 212,
            "rank": "2"
          },
          {
            "songId": 230,
            "rank": "3"
          },
          {
            "songId": 192,
            "rank": "4"
          },
          {
            "songId": 233,
            "rank": "5"
          },
          {
            "songId": 178,
            "rank": "6"
          },
          {
            "songId": 234,
            "rank": "7"
          },
          {
            "songId": 206,
            "rank": "8"
          },
          {
            "songId": 229,
            "rank": "9"
          },
          {
            "songId": 219,
            "rank": "10"
          },
          {
            "songId": 227,
            "rank": "11"
          },
          {
            "songId": 231,
            "rank": "12"
          },
          {
            "songId": 224,
            "rank": "13"
          },
          {
            "songId": 246,
            "rank": "14"
          },
          {
            "songId": 232,
            "rank": "16"
          },
          {
            "songId": 235,
            "rank": "17"
          },
          {
            "songId": 191,
            "rank": "18"
          },
          {
            "songId": 247,
            "rank": "19"
          },
          {
            "songId": 241,
            "rank": "23"
          },
          {
            "songId": 238,
            "rank": "25"
          },
          {
            "songId": 240,
            "rank": "26"
          },
          {
            "songId": 248,
            "rank": "30"
          },
          {
            "songId": 242,
            "rank": "31"
          },
          {
            "songId": 243,
            "rank": "HP"
          },
          {
            "songId": 244,
            "rank": "AC"
          },
          {
            "songId": 245,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 249,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "11/23/1971",
        "songRanks": [
          {
            "songId": 225,
            "rank": "1"
          },
          {
            "songId": 212,
            "rank": "2"
          },
          {
            "songId": 233,
            "rank": "3"
          },
          {
            "songId": 230,
            "rank": "4"
          },
          {
            "songId": 234,
            "rank": "5"
          },
          {
            "songId": 192,
            "rank": "6"
          },
          {
            "songId": 227,
            "rank": "7"
          },
          {
            "songId": 219,
            "rank": "8"
          },
          {
            "songId": 246,
            "rank": "9"
          },
          {
            "songId": 206,
            "rank": "10"
          },
          {
            "songId": 231,
            "rank": "11"
          },
          {
            "songId": 178,
            "rank": "12"
          },
          {
            "songId": 224,
            "rank": "13"
          },
          {
            "songId": 235,
            "rank": "14"
          },
          {
            "songId": 241,
            "rank": "15"
          },
          {
            "songId": 240,
            "rank": "16"
          },
          {
            "songId": 247,
            "rank": "17"
          },
          {
            "songId": 238,
            "rank": "18"
          },
          {
            "songId": 248,
            "rank": "21"
          },
          {
            "songId": 250,
            "rank": "24"
          },
          {
            "songId": 242,
            "rank": "25"
          },
          {
            "songId": 244,
            "rank": "26"
          },
          {
            "songId": 251,
            "rank": "36"
          },
          {
            "songId": 243,
            "rank": "46"
          },
          {
            "songId": 252,
            "rank": "HP"
          },
          {
            "songId": 245,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 186,
            "rank": "AC"
          },
          {
            "songId": 249,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "11/30/1971",
        "songRanks": [
          {
            "songId": 233,
            "rank": "1"
          },
          {
            "songId": 225,
            "rank": "2"
          },
          {
            "songId": 234,
            "rank": "3"
          },
          {
            "songId": 230,
            "rank": "4"
          },
          {
            "songId": 227,
            "rank": "5"
          },
          {
            "songId": 212,
            "rank": "6"
          },
          {
            "songId": 192,
            "rank": "7"
          },
          {
            "songId": 231,
            "rank": "8"
          },
          {
            "songId": 219,
            "rank": "9"
          },
          {
            "songId": 241,
            "rank": "10"
          },
          {
            "songId": 246,
            "rank": "11"
          },
          {
            "songId": 235,
            "rank": "12"
          },
          {
            "songId": 248,
            "rank": "13"
          },
          {
            "songId": 238,
            "rank": "14"
          },
          {
            "songId": 222,
            "rank": "15"
          },
          {
            "songId": 244,
            "rank": "16"
          },
          {
            "songId": 242,
            "rank": "17"
          },
          {
            "songId": 240,
            "rank": "21"
          },
          {
            "songId": 251,
            "rank": "23"
          },
          {
            "songId": 253,
            "rank": "26"
          },
          {
            "songId": 250,
            "rank": "29"
          },
          {
            "songId": 254,
            "rank": "31"
          },
          {
            "songId": 255,
            "rank": "49"
          },
          {
            "songId": 252,
            "rank": "60"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 249,
            "rank": "AC"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 146,
            "rank": "AC"
          },
          {
            "songId": 177,
            "rank": "AC"
          },
          {
            "songId": 245,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "12/07/1971",
        "songRanks": [
          {
            "songId": 233,
            "rank": "1"
          },
          {
            "songId": 234,
            "rank": "2"
          },
          {
            "songId": 225,
            "rank": "3"
          },
          {
            "songId": 227,
            "rank": "4"
          },
          {
            "songId": 212,
            "rank": "5"
          },
          {
            "songId": 230,
            "rank": "6"
          },
          {
            "songId": 241,
            "rank": "7"
          },
          {
            "songId": 250,
            "rank": "8"
          },
          {
            "songId": 246,
            "rank": "9"
          },
          {
            "songId": 242,
            "rank": "10"
          },
          {
            "songId": 192,
            "rank": "11"
          },
          {
            "songId": 244,
            "rank": "12"
          },
          {
            "songId": 254,
            "rank": "13"
          },
          {
            "songId": 238,
            "rank": "14"
          },
          {
            "songId": 231,
            "rank": "15"
          },
          {
            "songId": 255,
            "rank": "16"
          },
          {
            "songId": 235,
            "rank": "17"
          },
          {
            "songId": 248,
            "rank": "18"
          },
          {
            "songId": 219,
            "rank": "19"
          },
          {
            "songId": 251,
            "rank": "20"
          },
          {
            "songId": 240,
            "rank": "21"
          },
          {
            "songId": 256,
            "rank": "22"
          },
          {
            "songId": 245,
            "rank": "25"
          },
          {
            "songId": 253,
            "rank": "26"
          },
          {
            "songId": 258,
            "rank": "29"
          },
          {
            "songId": 252,
            "rank": "30"
          },
          {
            "songId": 259,
            "rank": "37"
          },
          {
            "songId": 260,
            "rank": "48"
          },
          {
            "songId": 261,
            "rank": "64"
          },
          {
            "songId": 266,
            "rank": "AC"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 189,
            "rank": "AC"
          },
          {
            "songId": 249,
            "rank": "AC"
          },
          {
            "songId": 245,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "12/14/1971",
        "songRanks": [
          {
            "songId": 233,
            "rank": "1"
          },
          {
            "songId": 234,
            "rank": "2"
          },
          {
            "songId": 250,
            "rank": "3"
          },
          {
            "songId": 246,
            "rank": "4"
          },
          {
            "songId": 254,
            "rank": "5"
          },
          {
            "songId": 242,
            "rank": "6"
          },
          {
            "songId": 230,
            "rank": "7"
          },
          {
            "songId": 241,
            "rank": "8"
          },
          {
            "songId": 253,
            "rank": "9"
          },
          {
            "songId": 225,
            "rank": "10"
          },
          {
            "songId": 227,
            "rank": "11"
          },
          {
            "songId": 212,
            "rank": "12"
          },
          {
            "songId": 256,
            "rank": "13"
          },
          {
            "songId": 263,
            "rank": "14"
          },
          {
            "songId": 244,
            "rank": "15"
          },
          {
            "songId": 264,
            "rank": "16"
          },
          {
            "songId": 248,
            "rank": "17"
          },
          {
            "songId": 258,
            "rank": "19"
          },
          {
            "songId": 255,
            "rank": "21"
          },
          {
            "songId": 260,
            "rank": "23"
          },
          {
            "songId": 240,
            "rank": "24"
          },
          {
            "songId": 259,
            "rank": "25"
          },
          {
            "songId": 265,
            "rank": "30"
          },
          {
            "songId": 266,
            "rank": "34"
          },
          {
            "songId": 267,
            "rank": "39"
          },
          {
            "songId": 268,
            "rank": "71"
          },
          {
            "songId": 251,
            "rank": "HP"
          },
          {
            "songId": 269,
            "rank": "AC"
          },
          {
            "songId": 270,
            "rank": "AC"
          },
          {
            "songId": 271,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 249,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "12/21/1971",
        "songRanks": [
          {
            "songId": 250,
            "rank": "1"
          },
          {
            "songId": 234,
            "rank": "2"
          },
          {
            "songId": 254,
            "rank": "3"
          },
          {
            "songId": 233,
            "rank": "4"
          },
          {
            "songId": 246,
            "rank": "5"
          },
          {
            "songId": 230,
            "rank": "6"
          },
          {
            "songId": 244,
            "rank": "7"
          },
          {
            "songId": 225,
            "rank": "8"
          },
          {
            "songId": 241,
            "rank": "9"
          },
          {
            "songId": 242,
            "rank": "10"
          },
          {
            "songId": 227,
            "rank": "11"
          },
          {
            "songId": 256,
            "rank": "12"
          },
          {
            "songId": 255,
            "rank": "13"
          },
          {
            "songId": 264,
            "rank": "14"
          },
          {
            "songId": 212,
            "rank": "15"
          },
          {
            "songId": 260,
            "rank": "17"
          },
          {
            "songId": 258,
            "rank": "19"
          },
          {
            "songId": 253,
            "rank": "21"
          },
          {
            "songId": 248,
            "rank": "22"
          },
          {
            "songId": 263,
            "rank": "24"
          },
          {
            "songId": 265,
            "rank": "26"
          },
          {
            "songId": 240,
            "rank": "27"
          },
          {
            "songId": 259,
            "rank": "28"
          },
          {
            "songId": 251,
            "rank": "29"
          },
          {
            "songId": 268,
            "rank": "70"
          },
          {
            "songId": 271,
            "rank": "AC"
          },
          {
            "songId": 249,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 270,
            "rank": "AC"
          },
          {
            "songId": 269,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 275,
            "rank": "AC"
          },
          {
            "songId": 276,
            "rank": "AC"
          },
          {
            "songId": 277,
            "rank": "AC"
          },
          {
            "songId": 278,
            "rank": "AC"
          },
          {
            "songId": 279,
            "rank": "AC"
          },
          {
            "songId": 104,
            "rank": "AC"
          }
        ]
      },
      {
        "weekOf": "12/28/1971",
        "songRanks": [
          {
            "songId": 250,
            "rank": "1"
          },
          {
            "songId": 234,
            "rank": "2"
          },
          {
            "songId": 254,
            "rank": "3"
          },
          {
            "songId": 233,
            "rank": "4"
          },
          {
            "songId": 246,
            "rank": "5"
          },
          {
            "songId": 230,
            "rank": "6"
          },
          {
            "songId": 244,
            "rank": "7"
          },
          {
            "songId": 225,
            "rank": "8"
          },
          {
            "songId": 241,
            "rank": "9"
          },
          {
            "songId": 242,
            "rank": "10"
          },
          {
            "songId": 227,
            "rank": "11"
          },
          {
            "songId": 256,
            "rank": "12"
          },
          {
            "songId": 255,
            "rank": "13"
          },
          {
            "songId": 264,
            "rank": "14"
          },
          {
            "songId": 212,
            "rank": "15"
          },
          {
            "songId": 260,
            "rank": "17"
          },
          {
            "songId": 258,
            "rank": "19"
          },
          {
            "songId": 253,
            "rank": "21"
          },
          {
            "songId": 248,
            "rank": "22"
          },
          {
            "songId": 263,
            "rank": "24"
          },
          {
            "songId": 265,
            "rank": "26"
          },
          {
            "songId": 240,
            "rank": "27"
          },
          {
            "songId": 259,
            "rank": "28"
          },
          {
            "songId": 251,
            "rank": "29"
          },
          {
            "songId": 268,
            "rank": "70"
          },
          {
            "songId": 271,
            "rank": "AC"
          },
          {
            "songId": 249,
            "rank": "AC"
          },
          {
            "songId": 222,
            "rank": "AC"
          },
          {
            "songId": 270,
            "rank": "AC"
          },
          {
            "songId": 269,
            "rank": "AC"
          },
          {
            "songId": 195,
            "rank": "AC"
          },
          {
            "songId": 239,
            "rank": "AC"
          },
          {
            "songId": 275,
            "rank": "AC"
          },
          {
            "songId": 276,
            "rank": "AC"
          },
          {
            "songId": 277,
            "rank": "AC"
          },
          {
            "songId": 278,
            "rank": "AC"
          },
          {
            "songId": 279,
            "rank": "AC"
          },
          {
            "songId": 104,
            "rank": "AC"
          }
        ]
      }
    ]
  }
]
