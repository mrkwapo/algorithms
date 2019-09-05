/*function confirmEnding(str, target) {
  
var res = str.substring(str.length -1 , str.length );
console.log(res);
  if(res === target){
 console.log(res);
 return true;
  }else{
    return false;
  } 
}

confirmEnding("Bastian", "n");
*/

//2nd Approach only missing one rule: "confirmEnding("Congratulation", "on")should return true."

function confirmEnding(str, target) {

var endOfString = str.indexOf(target, -1);
console.log(endOfString);

  if(str.substring(endOfString) === target){
 
 return true;
  }else{
    return false;
  } 

  
}

confirmEnding("Bastian", "n");


