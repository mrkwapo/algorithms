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
      // console.log(alphabetStr[i]);
      notIncluded.push(alphabetStr[i]);
    }

    //handle strings that don't start with a
        if (str[i] !== alphabetStr[0]) {
      //find str[i] in the alphabetStr and start looping through then push the letter in alphabetStr that doesn't match str[i]

      for(var j = alphabetStr.indexOf(str[0]); j < alphabetStr.length; j++){
        if(alphabetStr[j] !== str[i]){
          //console.log(alphabetStr[j]);
          return alphabetStr[j];
        }
     

      }
      
    }
  }

  //console.log(notIncluded[0]);
  //return notIncluded[0]
}

//fearNotLetter("abce"); //should return "d".
 //fearNotLetter("abcdefghjklmno") //should return "i".
 fearNotLetter("stvwx") //should return "u".
// fearNotLetter("bcdf") //should return "e".
 //fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.
