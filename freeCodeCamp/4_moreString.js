// Find the Length of a String
var firstNameLength = 0;
var firstName = "Barun";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Bhattacharjee";

lastNameLength = lastName.length;

console.log("firstNameLength: "+firstNameLength+", lastNameLength: "+lastNameLength+"\n");

//Use Bracket Notation to Find the Character in a String
var firstLetterOfFistName = firstName[0];
var secondLetterOfLastName = lastName[1];
console.log("firstLetterOfFistName: "+firstLetterOfFistName+"\n"+
            "secondLetterOfLastName: "+secondLetterOfLastName+"\n");

// String Immutability
var myStr = "Jello World";
//myStr[0] = 'H'; // throws an error because individual Characters in a string can not be changed
myStr = "Hello World";// need to change whole string


// Bracket Notation to Find the Last Character in a String
var lastLetterOfFirstName = firstName[firstName.length-1];
var lastLetterOfLastName = lastName[lastName.length-1];

// Bracket Notation to Find the Nth-to-Last Character in a String
var thirdToLastLetterOfFirstName = firstName[firstName.length-3];
var secondToLastLetterOfFirstName = firstName[firstName.length-2];
