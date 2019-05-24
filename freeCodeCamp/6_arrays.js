var ourArray = ["john", 23];

var myArray = ["Quincy", 1];

// Multi-dimensional array
var ourArray = [["the universe",42],["everything",101010]];

// Accessing Data using index
var myArr = [1,2,3,"Barun"];
var myData = myArr[0];//myArr[3];
console.log(myData+"\n");


// Modify Array Data with Indexes
myArr[1] = "Hello";
console.log(myArr[1]+"\n");


// Accessing Multi-dimensional Arrays with Indexes
var complexArr = [ [1,2,3], [4,5,6], [ [7,8,9], 10,13 ] ];
console.log(complexArr[1][2]+"\n");//6


// Manipulate Arrays with push().  Appends data to the end...
var ourArray = ["Stimpson","J","Cat"];
ourArray.push(["happy","joy"]); //["Stimpson","J","Cat",["happy","joy"]]


//Manipulate Arrays with pop(). Removes last element
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); // [1,2]
console.log(removedFromOurArray+"\n");

var complexArr = [ [1,2,3], [4,5,6], [ [7,8,9], 10,13 ] ];
var removedFromComplexArr = complexArr.pop(); // [1,2]
console.log(removedFromComplexArr+"\n");


// Manipulate Arrays With shift(). it removes the first element instead of the last.
var ourArray = ["Stimpson","J",["Cat"]];
var removedFromOurArray = ourArray.shift();
console.log("First element of ourArray "+removedFromOurArray+" is removed\n");


// Manipulate Arrays with unshift(). add elements in front of the array.
var ourArray = ["Stimpson","J","Cat"];
ourArray.shift(); // ["j","Cat"]
ourArray.unshift("Happy"); // ["Happy","J","Cat"]


// Shopping List
var myShoppingList = [ ["cereal",3], ["milk",2], ["bananas",3], ["juice",2], ["eggs",4]];
