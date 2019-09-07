function repeatStringNumTimes(str, num) {
  if (num < 0) {
    console.log('test');
    return '';
  } else {
    var test = Array(num + 1).join(str);
    console.log(test);
    return test;
  }
}
repeatStringNumTimes('*', 2);
