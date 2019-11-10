//mutations algorithm
function mutation(arr) {
var rawFirst= arr[0];
var rawSecond= arr[1];

var firstLowercased= rawFirst.toLowerCase();
var secondLowercased= rawSecond.toLowerCase();

var first= firstLowercased.split("");
var second= secondLowercased.split("");

console.log("This is the value in first arguement: " + first);
console.log("This is the value in second arguement: " + second);

for(var i = 0; i < first.length; i++){
if(first.indexOf(second[i])<0){

return false;
}
  return true;
}
}

 mutation(["hello", "hey"]);
