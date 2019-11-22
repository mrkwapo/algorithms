//Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


function fearNotLetter(str) {

  var alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
  var notIncluded = [];

  //handles if no letters are missing
  if (alphabetStr.includes(str)) {
    console.log(undefined);
    return undefined;
  }
  //handles strings that start with a
  for (var i = 0; i < alphabetStr.length; i++) {
    if (str[i] !== alphabetStr[i] && alphabetStr[0] === 'a') {
      notIncluded.push(alphabetStr[i]);
    }
    //handle strings that don't start with a
    if (str[0] !== alphabetStr[0]) {
      for (var j = alphabetStr.indexOf(str[0]); j < alphabetStr.length; j++) {
        if (!str.includes(alphabetStr[j])) {
          return alphabetStr[j];
        }
      }
    }
  }
  return notIncluded[0]
}

fearNotLetter("abce");
