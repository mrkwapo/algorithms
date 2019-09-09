function frankenSplice(arr1, arr2, n) {



var arr1b = arr1.slice(0)
  console.log("value of arr1 sliced: "+ arr1b);
  console.log("value of arr1: "+ arr1);
  console.log("value of arr2: "+ arr2);
  console.log("value of n: "+n);
  
var arr2b = [...arr2];
console.log("value of arr2b: " + arr2b);

  arr2b.splice(n,0, ...arr1b);
  console.log(arr2)

  return arr2b;

  
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
