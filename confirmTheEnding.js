// only use substring methods to find the last word in the string and compare it to the target. If equal in value return true, otherwise return false

/* function confirmEnding(str, target) {
  
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

/* There are 3 methods for extracting a part of a string:
 *slice(start, end) where to start slicing and where to end slicing. The end is optional. And you can use a negative to count characters backwards from the end.
 *substring(start, end)where to start slicing and where to end slicing. The end is optional. And you can use a negative to count characters backwards from the end.
 *substr(start, length)where to start slicing and length is how many characters from the start you want to slice. The length is optional. And you can use a negative to count characters backwards from the end.
 */

function confirmEnding(str, target) {
  //knowing that the substring methods above need a number to indicate where to start slicing within a string

  //to access the last characters of a string and compare it to the target you must use the length of the target. If you subtract the length of the target from the length of the
  return str.substring(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n');
