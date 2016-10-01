function factorialize(num) {
  var count = 1;
  for (var i = 1; i <= num; i++) {
    count *= i;
  }
  return count;
}

//factorialize(5);
