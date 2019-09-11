function mutation(arr) {
var rawFirst= arr[0];
var rawSecond= arr[1];

var first= rawFirst.toLowerCase();
var second= rawSecond.toLowerCase();

console.log("This is the value in first arguement: " + first);
console.log("This is the value in second arguement: " + second);

for(var i = 0; i <= first.length; i++ ){

console.log(first[i])
}

for(var j = 0; j <= second.length; j++ ){
if(!first.includes(second[j])){
  console.log(second[j]);
return false;

}else{
  console.log(second[j]);
  return true; 
}
}
}

mutation(["hello", "hey"]);
