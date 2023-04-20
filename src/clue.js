// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    // 0 - mrGreen
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepeneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },
  {
    // 1 - drOrchild
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },
  {
    // 2 - profPlum
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },
  {
    // 3 - missScarlet
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },
  {
    // 4 - mrsPeacock
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  {
    // 5 - mrMustard
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "He is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];

// Rooms Array

const roomsArray = [
  /* 0 - Dining Room, 1 - Conservatory, 2 - Kitchen, 3 - Study, 4 - Library
    5 - Billiard Room, 6 - Lounge, 7 - Ballroom, 8 - Hall, 9 - Spa, 
    10 - Living Room, 11 - Observatory, 12 - Theater, 13 - Guest House,
    14 - Patio */
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" },
];

// Weapons Array

const weaponsArray = [
  {
    // 0 - rope
    name: "rope",
    weight: 10,
  },
  {
    // 1 - knife
    name: "knife",
    weight: 8,
  },
  {
    // 2 - candlestick
    name: "candlestick",
    weight: 2,
  },
  {
    // 3 - dumbbell
    name: "dumbbell",
    weight: 30,
  },
  {
    // 4 - poison
    name: "poison",
    weight: 2,
  },
  {
    // 5 - axe
    name: "axe",
    weight: 15,
  },
  {
    // 6 - bat
    name: "bat",
    weight: 13,
  },
  {
    // 7 - trophy
    name: "trophy",
    weight: 25,
  },
  {
    // 8 - pistol
    name: "pistol",
    weight: 20,
  },
];

// ITERATION 2

/*  Apply Math.random() to generate a random # 0-1 and multiply by the array length;
    Apply Math.floor() to round down the result;
    Return element at array[i] 
*/
function selectRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
  // Fetch a random individual element from each array of objects
  const suspect = selectRandom(suspectsArray);
  const weapon = selectRandom(weaponsArray);
  const room = selectRandom(roomsArray);
  // return a new object with each randomly generated element as property and value
  return {
    suspect: suspect,
    weapon: weapon,
    room: room,
  };
}

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}
