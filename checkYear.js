var givenMonth = 12;
var givenDay = 30;


var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var todayMonth = months[d.getMonth()];
var d = new Date();
var todayDay = d.getDate();

var currentMonthNumber = months.indexOf(todayMonth) + 1 ;

console.log("This is the number of the current month: " + currentMonthNumber);

console.log( " This is the number of the current day: " + todayDay);


console.log( "This is the difference between the given month and today's month: " + (currentMonthNumber - givenMonth) );
console.log( "This is the difference between the given month and today's month handling wrap around with module: " + (currentMonthNumber - givenMonth%12) );


console.log( "This is the difference between the given day and today's day: " + (todayDay - givenDay) );
console.log( "This is the difference between the given day and today's day handling wrap around with module: " + (todayDay - givenDay%30) );


