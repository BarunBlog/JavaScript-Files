var myFirstName = "Barun";
var myLastName = "Bhattacharjee";

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

var myStr2 = '<a href="file:///D:/Barun/P-300/JavaScript/first%20project/index.html">Link</a>'
console.log(myStr2);

// Back quotes to print both single and double quotes
var myStr3 = `'<a href="file:///D:/Barun/P-300/JavaScript/first%20project/index.html">Link</a>'`
console.log(myStr3+"\n");

//Escape Sequence
/*
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
*/

var myStr4 = "FistLine\n\t\\SecondLine\nThirdLine";
console.log(myStr4+"\n");

// Concatenating Strings with Plus Operator
var ourStr = "I am Barun "+"Bhattacharjee";
console.log(ourStr+"\n");

// Concatenating Strings with Plus Equals Operator
var ourStr2 = "I come first. ";
ourStr2 += "I come second.";
console.log(ourStr2+"\n");

// Constructing Strings with Variables
var ourName = "freeCodeCamp";
var ourStr3 = "Hello, our name is "+ourName+", how are you?";
console.log(ourStr3+"\n");

// Appending Variables to Strings
var anAdjective = "awesome!";
var ourStr4 = "freeCodeCamp is ";
ourStr4 += anAdjective;
console.log(ourStr4);
