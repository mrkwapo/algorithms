function pairElement(str) {

  var tempArr = [];
  var arrOfArr =[];
  
  for( var i = 0; i < str.length; i++){
   var letter = str[i];
    tempArr.push(letter);
    
    arrOfArr.push(tempArr.splice(0,1));       
       var eachArr = arrOfArr[i];
      //  console.log(eachArr);
      //  console.log(typeof eachArr);
      
      eachArr.push(eachArr.toString());

         console.log(eachArr);       
        
  }
    
   console.log(arrOfArr);
   
  //return arrOfArr;
}

pairElement("GCG");
