function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i] + ' first condition');

      return arr[i];
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
