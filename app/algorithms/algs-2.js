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
  var regex = /(1|1 |)(\(\d{3}\)|\d{3})(-| |)\d{3}(-| |)\d{3,4}/;
  var patt = new RegExp(regex);
  var res = str.match(regex);

  if (res !== null) {
    if (str === res[0]) {
      return true;
    }
  }
  return false;
}

/**
 * symmetric differences
 * @param args
 * @returns {*}
 */
function sym(args) {

  array = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var z = 0; z < arguments[i].length; z++) {
      array.push(arguments[i][z]);
    }
  }
  array.sort(function (a, b) {
    return a - b;
  }); // may not even needed
  for (var i = 0; i < array.length; i++) {

  }
  return array;
}

greek = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 90, 100, 500, 900, 1000];
roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
  // 10 - 50
  'X', 'XX', 'XXX', 'XL', 'L', 'XC',
  // 100 +
  'C', 'D', 'CM', 'M'];
// roman numbers
function convertToRoman(num) {
  prev = 0;
  current = 0;
  for (var i = 0; i < greek.length; i++) {
    current = greek[i];
    if (current === num) {
      return roman[i];
    } else if (i === greek.length - 1) { // hit last one
      return hitRange(num, prev, current);
    } else if (num < current) { // find range
      return hitRange(num, prev, current);
    }
    prev = current;
  }

  return num;
}
/**
 * function to find number, when range is known.
 */
function hitRange(num, min, max) {
  if (num < max) { // first case
    number = num - min;
    return convertToRoman(min) + convertToRoman(number);
  } else {
    number = num - max;
    return convertToRoman(max) + convertToRoman(number);
  }
}

// missing letters
function fearNotLetter(str) {
  prev = 0;
  found = undefined;
  for (var i = 0; i < str.length; i++) {
    index = str.charCodeAt(i);
    if (index - prev > 1 && i > 0) {
      found = String.fromCharCode(prev + 1);
      break;
    }
    prev = index;
  }
  return found;
}


// http://forum.kerbalspaceprogram.com/index.php?/topic/59966-how-to-calculate-altitude-for-a-given-orbital-period-amp-vice-versa/
/**
 * function to return orbital periods
 * @param arr
 * @returns {*}
 */
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var p = 3.14;

  for (var i = 0; i < arr.length; i++) {
    avgAlt = arr[i]['avgAlt'];
    console.log(avgAlt);
  }

  return arr;
}
