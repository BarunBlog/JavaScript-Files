var ourDog = {
  "name" : "Camper", // string
  "legs" : 4,        // number
  "tails" : 1,       // number
  "friends" : ["everything"] // object
}; // Any type of data can be stored in object

//console.log(typeof(ourDog["tails"]));


// Accessing object properties with dot Notation
var nameValue = ourDog.name;
var legsValue = ourDog.legs;
console.log("Using dot: "+nameValue+" "+legsValue+"\n");


// Accessing object properties with Bracket Notation
var testObj = {
  "an entree" : "hamburger",
  "my side" : "veggies",
  "the drink" : "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
console.log("Using Bracket: "+entreeValue+" "+drinkValue+"\n");


// Accessing object properties with Variables
var testObj = {
  12 : "Namath",
  16 : "Montana",
  19 : "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];

// Updating object properties
ourDog.name = "Happy Camper";

// Add new properties to an object
ourDog.bark = "bow-wow";
ourDog['barkLoud'] = "woof!";

// Delete properties from an object
delete ourDog.bark;
delete ourDog.barkLoud;
