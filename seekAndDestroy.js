//Intermediate Algorithm Scripting: Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Note
//You have to use the arguments object.

function destroyer(arr) {
  //pushing all arguments beyond arguments[0] into a new array 
  var newArr = [];
  for (var j = 1; j < arguments.length; j++) {
    newArr.push(arguments[j]);
  }
  //iterating through all elements within arguments[0] array
  for (var i = 0; i < arguments[0].length; i++) {
    //checking if any element in arguments[0] is in the new array containing all arguments beyong argument[0](in arr)
    //if so then delete that element from the arguments[0] array
    if (newArr.includes(arguments[0][i])) {
      delete arguments[0][i];
    }
  }
  //because the delete method will leave behind spaces we need to filter the array to return an array which doesn't include the empty spaces.
  var filtered = arguments[0].filter(function (array) {
    return array != null;
  })
  return filtered
  console.log(filtered);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
