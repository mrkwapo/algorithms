function largestOfFour(arr) {
  var finalArr = [];
for(var i = 0; i < arr.length; i++){
//console.log(arr[i]);

var arrs = (arr[i]);

var sorted = arrs.sort(function(a, b){return b-a});
//console.log(arrs.sort(function(a, b){return b-a}));

var numberized = parseInt(sorted);

finalArr.push(numberized);
console.log(finalArr);
}


  
  return finalArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
