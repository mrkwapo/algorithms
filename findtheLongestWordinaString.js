function findLongestWordLength(str) {
var numbers =[];
  
//convert a string to an array
var arr = str.split(" ");
//console.log(arr); // The,quick,brown,fox,jumped,over,the,lazy,dog

/*
* access each word in an array
*count the length of each word
*/

for(var i = 0; i < arr.length; i ++){
  
  var eachWord = arr[i];
  //console.log(arr[i]);
  /*count the length of each word*/
  var lengthOfEachWord = eachWord.length;
 // console.log(eachWord.length);
  numbers.push(lengthOfEachWord);
}

console.log(numbers);
console.log(typeof(numbers[0]));

var sorted = numbers.sort(function(a, b){return b-a})
console.log(sorted);

console.log(parseInt(sorted));

//console.log(Math.max(numbers));

  return parseInt(sorted);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
