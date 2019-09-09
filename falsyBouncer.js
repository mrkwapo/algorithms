function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = [];
  
for(var i = 0; i < arr.length; i++){
 if(Boolean(arr[i]) ){
  newArr.push(arr[i]);
}

}
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
