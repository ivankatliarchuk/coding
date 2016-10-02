function sumAll(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  count = 0;
  for (var i = arr[0]; i <= arr[1]; i++) {
    count += i;
  }
  return count;
}

/**
 * method to return symmetrict difference of two array.
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  concatArrays = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < concatArrays.length; i++) {
    for (var z = concatArrays.length - 1; z > -1; z--) {
      if (concatArrays[i] === concatArrays[z] && i !== z) {
        break;
      } else if (z === 0) {
        newArr.push(concatArrays[i]);
      }
    }
  }

  return newArr;
}

function telephoneCheck(str) {
  // Good luck!
  // test
  var regex = /[^1\s|\d{3}\-\d{3}\-\d+{3}]/;
  var patt = new RegExp(regex);
  var res = patt.test(str);
  console.log(str + " -->" + res);
  sanitized = str.replace(/[- ()]/g, '');
  // console.log(sanitized);
  if (sanitized.length === 10 || sanitized.length === 11) {
    return true;
  }
  leftB = str.indexOf("(");
  rightB = str.indexOf(")");
  if ((rightB !== -1 && leftB === -1) || (rightB === -1 && leftB !== -1) ||(rightB - leftB !== 3)) {
   // return false;
  }

  return false;
}
