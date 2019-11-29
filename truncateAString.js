//updated truncate a string algorithm
function truncateString(str, num) {
  //console.log(Number.isInteger(num))

  if (str.length != num) {
    var res = str.slice(0, num);
    console.log(str.slice(0, num));

    var answer = res + '...';
    console.log(res + '...');
    console.log(str.length);
    return answer;
  } else {
    console.log(str);
    return str;
  }
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
