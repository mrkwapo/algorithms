function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr=[];
  var arrSplit = arr.splice(0, size);
for(var i= 0; i < arr.length; i++){
  newArr.push(arrSplit[i]);
console.log(newArr); 
}

  
  return arrSplit;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

