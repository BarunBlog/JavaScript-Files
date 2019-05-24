// Write Reusable code with Functions
function ourReusableFunction(){
  console.log("Heyya, World");
}

ourReusableFunction();
ourReusableFunction();
console.log("\n");


// Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b){ // a,b => Parameters
  console.log(a - b);
}

ourFunctionWithArgs(10,6);// 10, 6 => Arguments
console.log("\n");

// Global Scope and Functions

var myGlobal = 10; // global variable

function fun1(){
  // determined as a global variable if var is not given but it will throw an error but will work in browser
  var oopsGlobal = 5; // if var is there then it is local variable 
}

function fun2(){
  var output = "";
  if(typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();
