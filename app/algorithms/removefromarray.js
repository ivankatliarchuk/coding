function destroyer(arr) {
  //
  args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  function extracted(args) {
    return function (val) {
      for (var i = 0; i < args.length; i++) {
        if (args[i] === val) {
          return false;
        } else if (i === args.length - 1) {
          return true;
        }
      }
    };
  }

  array = arr.filter(extracted(args));

  return array;
}

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

encoded = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
decoded = "NOPQRSTUVWXYZABCDEFGHIJKLM";
function cipherRot13(str) { // LBH QVQ VG!
  array = str.split('');
  for (var i = 0; i < array.length; i++) {
    index = encoded.indexOf(array[i]);
    if (index > -1)
    array[i] = decoded.charAt(index);
  }
  result = array.join('');
  return result;
}



