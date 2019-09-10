function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //push all numbers into a new array
  /// sort the new array

  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  var unsortedArr = newArr.push(num);

  var sortedArr = newArr.sort();

  var indexedArr = newArr.indexOf(num);

  console.log(indexedArr);

  console.log(newArr);

  //return the index of the variable num
  return indexedArr;
}

getIndexToIns([40, 60], 50);
