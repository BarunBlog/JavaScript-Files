// Local variable VS Global variable
var outerWear = "T-Shirt";

function myOutfit(){

  return outerWear;
}
console.log(myOutfit()); // T-Shirt


function myOutfit1(){
  var outerWear = "Sweater";

  return outerWear;
}
console.log(myOutfit1()); // Sweater
console.log(outerWear+"\n"); // T-Shirt

// Return a value from a function with Return
function minusSeven(num){
  return num - 7;
}

console.log(minusSeven(10)+"\n"); //3

// Understanding Undefined Value Returned from a function
var sum = 0;
function addThree(){
  sum = sum + 3;
}

console.log(sum+"\n"); // no change in sum

// Assignment with a Returned value
var changed = 0;

function change(num){
  return (num+5) / 3;
}

changed = change(10);
console.log(changed+"\n");

// Stand in line (Queue processing)

function nextInLine(arr, item){
  arr.push(item);
  return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // change array to string
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
/*
Before: [1,2,3,4,5]
1
After: [2,3,4,5,6]
*/
