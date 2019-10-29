//Intermediate Algorithm Scripting: Pig Latin
//Translate the provided string to pig latin.

//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

//If a word begins with a vowel you just add "way" to the end.

//If a word does not contain a vowel, just add "ay" to the end.

//Input strings are guaranteed to be English words in all lowercase.


function translatePigLatin(str) {

  var vowel = ['a', 'e', 'i', 'o', 'u', 'y'];

  for (var i = 0; i < str.length; i++) {
    if (vowel.includes(str[0])) {
      return str + "way";
    }
    if (!vowel.includes(str[0]) && vowel.includes(str[i])) {
      //console.log(str.slice(str.indexOf(str[i])) + str.slice(0, str.indexOf(str[i])) + "ay");
      return str.slice(str.indexOf(str[i])) + str.slice(0, str.indexOf(str[i])) + "ay";

    }

  }


  //return str;
}
//console.log(str)
translatePigLatin("consonant");


// one more test case needs to pass
