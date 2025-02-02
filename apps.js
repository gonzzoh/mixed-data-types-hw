// DATA TYPES QUESTIONS //

// Booleans - (let islightOn = true)
// String - (let email = "fakemail@fmail.com")
// Array - (const spaceship=[hull, laser blasters...])
// Array - (const students=[Arifa, Siara, John, Miguel])
// Object - ( const classId = {
//     Gonz: "NJ"
// } )
// object - ( const classId = {
//     Gonz: {"NJ", Invincible, Rick and Morty"}; }

//////////////////////////////////////////////////////////////////////
// TAKE IT EASY //

// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// console.log(rainbow[4])

// const Gonzalo = {
//     favoriteFood: 'Aji de Gallina',
//     hobby: 'working on car',
//     residence: 'Roselle Park',
//     favDataType: 'Booleans',
// stalker: function(){
//     console.log(Gonzalo.hobby)
// }
// }
// Gonzalo.stalker();

///////////////////////////////////////////////////////////////////////
// CRAZY OBJECTS //

// const crazyObject = {
//     taco: [
//       {
//         meat: 'steak',
//         cheese: ['panela', 'queso', 'chihuahua']
//       },
//       {
//         meat: 'chicken',
//         salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//       },
//     ],
//     larry: {
//       nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//       quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//       characters: [
//         {
//           name: "Jeff",
//           occupation: "manager"
//         },
//         {
//           name: "funkhauser",
//           occupation: "tv dude"
//         },
//         {
//           name: "susie",
//           occupation: "jeffs wife",
//           favourtieHobby: "Swearing at Larry and Jeff"
//         },
//       ]
//     }
//   }

//   console.log(crazyObject.taco[1].salsa[5]);
//   console.log(crazyObject.larry.quotes[0]);
//   console.log(crazyObject.larry.characters[2].favourtieHobby);
//   console.log(crazyObject.larry.nicknames[1]);
//   console.log(crazyObject.larry.characters[1]);

/////////////////////////////////////////////////////////////////////
// OBJECT CEPTION //

// const inception = {
//     reality: {
//         dreamLayer1: {
//             dreamLayer2: {
//                 dreamLayer3: {
//                     dreamLayer4: {
//                         dreamLayer5: {
//                             dreamLayer6: {
//                                 limbo: "Joseph Gordon Levitt"
//                            }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//  }

// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
//  console.log(inception);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// BOND-FILMS //

const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

  // QUESTION 5 //
  // const bondTitles = [];
  // PSUEDOCODE FOR THE PROBLEM //
  // STEP 1: loop over bond films
  // STEP 2: grab the "title" key value pair
  // STEP 2a: make a temporary "holding variable" to store the title
  // STEP 2b: store the .title into the holding variable
  // STEP 3: .push title into bondTitles
  // for ( let i = 0; i < bondFilms.length; i++) {
  //   let title = bondFilms[i].title
  //   bondTitles.push(title)
  //   console.log(bondTitles)
  // }
  
// QUESTION 6 //
//   const oddBonds = [];
//   const lameBonds = []

//   for ( let i = 0; i < bondFilms.length; i++) {
//     if (bondFilms[i].year % 2 == 0){
//       let lames = bondFilms[i].year;
//       lameBonds.push(lames)
//   } else {
//     let odds = bondFilms[i].year
//     oddBonds.push(odds)
//   }
// }
// console.log(oddBonds) 

// QUESTION 7 //


let bondProfit = []
for ( let i = 0; i < bondFilms.length; i++) {
  let arrSum = bondFilms[i].gross;
  let noProf = arrSum.replaceAll("$", "");
  let noComa = noProf.replaceAll(",", "");
  let intGross = parseInt(noComa);
//  bondProfit = bondProfit + intGross;
// bondProfit += intGross

  bondProfit.push(intGross);
  

  // bondProfit.push(noComa);
  // bondProfit.push(bondGross);
  
  
  // console.log(bondProfit)
}

let bondGross = (accumulator, currentValue) => {
  return accumulator + currentValue
}
console.log(bondProfit.reduce(bondGross))



