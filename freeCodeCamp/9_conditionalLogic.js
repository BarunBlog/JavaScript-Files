// Use Conditional logic with if statement
function trueOrFalse(isThatTrue){
  if(isThatTrue){
    return "Yes, that is true";
  }
  return "No, that is false";
}

console.log(trueOrFalse(true)+"\n");

// Comparison with the Equality Operator
function testEqual(val){
  if(val==12){
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual('12')+"\n");

// Comparison with the Strict Equality Operator
/*
>Equality Operator
3 == 3 true
3 == '3' true
Because Equality Operator converts to a common type
>Strict Equality Operator
3 === 3 true
3 === '3' false
*/
function testEqual1(val){
  if(val===12){
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual1('12')+"\n");


//Comparison with the Inequality Operator
function testNotEqual(val){
  if(val != 99){ // Does type convertion like ==
    return "Not Equal";
    // != ->  Equal
    // !== -> Not Equal
  }
  return "Equal";
}
console.log(testNotEqual('99')+"\n");


// Comparison with the greater than Operator
function testGreaterThan(val){
  if(val>100){
    return "Over 100";
  }
  if(val>10){
    return "Over 10";
  }
  return "10 or under";
}
console.log(testGreaterThan(10)+"\n");

//Comparison with Less than Operator
function testLessThan(val){
  if(val<25){
    return "Under 25";
  }
  if(val<55){
    return "Under 55";
  }
  return "55 or over";
}
console.log(testLessThan(10)+"\n");

//Comparison with Less than or Equal to Operator
function testLessThanOrEqual(val){
  if(val<=25){
    return "Less than or Equal to 25";
  }
  if(val<=55){
    return "Less than or Equal to 55";
  }
  return "55 or over";
}
console.log(testLessThanOrEqual(10)+"\n");


//Comparison with Logical And Operator
function testLogicalAnd(val){
  if(val <= 50 && val >= 25){
    return "Yes";
  }

  return "No";
}
console.log(testLogicalAnd(10)+"\n");


//Comparison with Logical Or Operator
function testLogicalOr(val){
  if(val < 10 && val > 20){
    return "Outside";
  }

  return "Inside";
}
console.log(testLogicalOr(10)+"\n");

// if, else and else if
function testAllLogic(val){
  if(val > 100){
    return "Larg";
  }
  else if (val > 50 && val <= 100) {
    return "Mid";
  }
  else {
      return "Small";
  }
}
console.log(testAllLogic(56)+"\n");
