var givenMonth = 12;
var givenYear = 1984;

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var todayMonth = months[d.getMonth()];
var currentYear= d.getFullYear();

var currentMonthNumber = months.indexOf(todayMonth) + 1 ;

console.log("This is the number of the current month: " + currentMonthNumber);

console.log( " This is the number of the current year: " + currentYear);


console.log( "This is the difference between the given month and the current month: " + (currentMonthNumber - givenMonth) );

var monthDifference = currentMonthNumber - givenMonth;



var yearDifference = currentYear - givenYear;
console.log( "This is the difference between the given year and the current year: " + yearDifference + " years and " + Math.abs(monthDifference) + " months");
