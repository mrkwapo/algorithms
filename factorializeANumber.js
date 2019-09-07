//using recursion function to factorialize a number (recursion is a function that calls itself)
function factorialize(n) {
  // Setting a condition to let the function know when to stop running
  if (n === 0) {
    return 1;
  }
  var fact = n * factorialize(n - 1);
  console.log(fact);
  return fact;
}

factorialize(5);

//*****************************************************************************
//Below is this same algorithm solved using a for loop instead of recursion
