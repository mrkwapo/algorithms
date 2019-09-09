function titleCase(str) {
  //access the first letter of each word

  var splitStr = str.toLowerCase().split(' ');

  var sentence = [];
  for (var i = 0; i < splitStr.length; i++) {
    sentence.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1));
  }
  return sentence.join(' ');
}

titleCase('sHoRt AnD sToUt');
