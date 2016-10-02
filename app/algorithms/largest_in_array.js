function largestOfFour(arr) {
  // You can do this!

  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].sort(function (a, b) {
      return a - b;
    })[arr[i].length - 1]);
  }
  return result;
}
