function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

  var result = "";
  result += "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb;

  return result;
}

var myStr = wordBlanks("dog","big","ran","quickly");
console.log(myStr);

myStr = wordBlanks("bike","slow","flew","slowly");
console.log(myStr);
