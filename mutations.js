function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  
  for (var i=0;i<second.length;i++) {
    if (first.includes(second[i]) ==false)
      return false;
  }
  return true;
 }
