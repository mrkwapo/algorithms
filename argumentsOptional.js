//Intermediate Algorithm Scripting: Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

//Calling this returned function with a single argument will then return the sum:

//var sumTwoAnd = addTogether(2);

//sumTwoAnd(3) returns 5.

//If either argument isn't a valid number, return undefined.

function addTogether() {

  var sum = [];

  function myFunc(total, num) {
    return total + num;
  }

  for (var i = 0; i < arguments.length; i++) {
    if (!Number.isInteger(arguments[i])) {
      return undefined;
    }

    if (Number.isInteger(arguments[i])) {
      sum.push(arguments[i]);
    }
  }

  return sum.reduce(myFunc);
}


addTogether(2, 3);

