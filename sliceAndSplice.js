function frankenSplice(arr1, arr2, n) {
  // move elements in order from arr1 to arr2.
  //place items in n position of arr2
  // rerturn the new array

  var arr3 = [];

  arr3.push(arr2.splice(n, 0, ...arr1));

  console.log(arr2);

  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
