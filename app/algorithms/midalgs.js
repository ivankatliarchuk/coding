'use strict';
/**
 * Function to check cash register.
 * @param price purchase price.
 * @param cash payment made.
 * @param cid cash in drawer.
 * @returns return change in coins, sorted in highest to lowest
 * order. or string.
 */

var NO_FUNDS = 'Insufficient Funds';
var CLOSED = 'Closed';
var coins = {'PENNY' : 0.01, 'NICKEL' : 0.05, 'DIME' : 0.10, 'QUARTER' : 0.25, 'ONE' : 1.0, 'FIVE' : 5, 'TEN' : 10,
         'TWENTY' : 20, 'ONE HUNDRED' : 100};
function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  var own = cash - price;
  // count cash in register
  var inDrawer = amount(cid);
  if (inDrawer < own) {
    change = NO_FUNDS;
  } else if (inDrawer === own) {
    change = CLOSED;
  } else {
    change = [];

    var toPay = highestCoin(own, cid);

    console.log('to pay' + JSON.stringify(toPay));
    // determine how to pay
    for (var i = 0; i < toPay.length; i++) {

      var payNumber = Math.floor(Math.round(own * 100 / toPay[i][0]) /100);
      var paid;
      if (payNumber <= toPay[i][1]) {
        paid = payNumber * toPay[i][0];
      } else {
        paid = toPay[i][0] * toPay[i][1];
      }

      own -= paid;
      if (paid > 0) {
        change.push([toPay[i][2], paid]);
      }
      if (own === 0) {
        break;
      }
    }
   // console.log('paid ' + JSON.stringify(change));
    var paid = 0;
    for (var i = 0; i < change.length; i++) {
      paid += change[i][1];
    }
    if (paid < (cash - price)) {
      change = NO_FUNDS;
    }

  }
  return change;
}
/**
 * count cash in drawyer.
 * @param cid cash in drawer.
 * @return amount.
 */
function amount(cid) {
  var amount = 0;
  for (var i = 0; i < cid.length; i++) {
    amount += cid[i][1];
  }
  return Math.round(amount * 1000) / 1000 ;
}

/**
 * Function to determine highest value to pay.
 * @param own
 * @param cid
 *
 */
function highestCoin(own, cid) {
  // should contain number of coins and value
  var result = [];

  for (var key in coins) {
    var coinValue = coins[key];
    if (coinValue < own) {
      // check whether coin exist in drawer.
      for (var i = 0; i < cid.length; i++) {
        if (cid[i][0] === key && cid[i][1] > 0) {
          var amount = Math.round((cid[i][1] / coinValue) * 1000) / 1000;

          result.push([coinValue,amount, key]);
        }
      }
    }
  }

  return result.sort(function (a, b) {
    return b[0] - a[0];
  });
}

/**
 * Function to summ all primes.
 */
function sumPrimes(num) {
  // console.log(num + '-' + prime(num));
  var smallFactors= [];
  for (var i = 2; i <= num; i++) {
    if (prime(i)) {
      smallFactors.push(i);
    }
  }
  return smallFactors.reduce(function (prev, current) {
    return prev + current;
  });
}

function prime(num) {
  var prop = Math.sqrt(num);
  for (var i = 2; i <= prop; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var arrayOfPrimes;
var sum_;

function isPrime(x){
  /*if x is prime return true, else return false */

  // check for primality:
  for(var i = 0; i < arrayOfPrimes.length; i++){
    if(x % arrayOfPrimes[i] === 0){
      return false;
    }
    //sieve of eratosthenes property:
    if(arrayOfPrimes[i] > Math.sqrt(x)){
      break;
    }
  }
  return true;
}

function sumPrimes1(num) {
  arrayOfPrimes = [];
  sum_ = 0;
  for(var i = 2; i <= num; i++){
    if(isPrime(i)){
      arrayOfPrimes.push(i);
      sum_ += i;
    }
  }
  console.log(arrayOfPrimes);
  return sum_;
}

function permutation(str) {
  var permutation = [];


  return str;
}

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var p = 3.141592689;

  var result = []; // todo simple remove from and add
  for (var i = 0; i < arr.length; i++) {
    var first = arr[i];

    var name = first.name;
    var avg = first.avgAlt;
    var a = earthRadius + avg;
    var number = Math.sqrt(Math.pow(a, 3) / GM);

    var T = 2 * p * number;
    delete first['avgAlt'];
    first['orbitalPeriod'] = Math.round(T);
    result.push(first);
  }


  return result;
}

function pairwise(arr, arg) {
  arr.sort(function (a, b) {
    return a - b;
  }); // not really needed

  var result = [];
  var allResults = combinations(arr,  result);

  for (var i = 0; i < allResults.length; i++) {
    console.log(allResults[i]);
  }
  return arg;
}

function combinations(input) {
  var result = [];
  var f = function (temp, worker, size) {
    for (var i = 0; i < worker.length; i++){

    //  console.log('->' + input[i] + "]");

        temp.push(worker[i]);
        result.push(temp);
        f(temp, worker.slice(0), size);
    }
  };
  f([], input, input.length);
 // console.log("->" + result);
  return result;




 /* var innerResult = [];
  for (var i = 0; i < result.length; i++) {
    for (var z = 0; z < result[i].length; z++) {
      var temp = [];
      temp.push(result[i]);
      temp.push(result[i][z]);
      innerResult.push(temp);
    }
  }
  // do it again
  return combinations(input, size - 1, innerResult);*/
}

// add more functions



function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  };
  f('', chars);
  return result;
}
function LOG(message) {
 // console.log("-->" + message + "<--");
}
function symSimetic(args) {

  var result = [];
  var array = Array.prototype.slice.call(args, 0);

  for (var f = 0; f < array.length; f++) {

    // remove duplicate
    var temp = [];
  //  LOG(array[f]);
    for (var i = 0; i < array[f].length; i++) {
      var unigque = false;
      for (var z = i + 1; z < array[f].length; z++) {
        if (array[f][i] === array[f][z]) {
          LOG(array[f][i] + '::<->::' +  array[f][z]);
          array[f].splice(z, 1);
          z--;
          LOG('removed ' + array[f]);
        } else if (z === array[f].length - 1) {
          unigque = true;
        }
      }
      if (i === array[f].length - 1 || unigque) {
        temp.push(array[f][i]);
      }
    }
    // LOG('->temp->' + temp);
    if (f === 0) {
      result = result.concat(temp).sort(sortF);
    } else {
      var newArr = [];
      LOG('-> res ' + result);
      LOG('-> tt ' + temp);
      LOG("++++");
      for (var i = 0; i < result.length; i++) {
        var flag = false;
        for (var z = 0; z < temp.length; z++) {
          if (result[i] === temp[z] ) {
            LOG('removed ' + temp[z] + ' from temp');
            temp.splice(z, 1);
           // z--;
            flag = true;
          } else if (z === temp.length - 1) {
            LOG("added " + result[i]);
            newArr.push(result[i]);
          }
        }
        if (flag) {
          LOG('removed ' + result[i] + ' from result');
          result.splice(i, 1);
          flag = false;
          i--;
        }
      }
      LOG(newArr + 'plus ' + result);
      result = result.concat(temp).sort(sortF);
    }
  }

  return result;
}

function sortF(a, b) {
  return a -b;
}

function smallestCommons(arr) {

  var a = arr[0];
  var b = arr[1];

  var res = lcm(a, b);

  return res;
}

function lcm(a, b) {
  var aa = [];
  var bb = [];
  if (prime(a)) {
    aa.push(a);
  }
  if (prime(b)) {
    bb.push(b);
  }
  if (aa.length !==0 && bb.length !== 0) {
    return a * b;
  }
  if (a.length === 0) {
    var prop = Math.sqrt(num);
    for (var i = 2; i <= prop; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  if (b.length === 0) {

  }
}
/**
 *
 * @param str
 * @param before
 * @param after
 * @return {*}
 */
function myReplace(str, before, after) {
  // check whether or not first letter is capital.
  var charac = before[0];
  if (charac === charac.toUpperCase()) {
    // upper case.
    var aChar = after[0];
    after = after.replace(aChar, aChar.toUpperCase());
  } else {

  }
  return str.replace(before, after);
}

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof bool === "boolean") {
  //  console.log("yes " + bool);
    return true;
  } else {
  //  console.log("no [" + bool + "]");
    return false;
  }
  return bool;
}

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var result = [];
  var prev = false;
  for (var i = 0; i < str.length; i++) {
    var charac = str[i];
    if (i > 0) {
      // test whether the letter is uppercase
      if (charac === charac.toUpperCase() && charac !== ' '
        && charac !== '_'
        && charac !== '-'
        && str[i-1] !== " "
        && str[i-1] !== "-"
        && str[i-1] !== "_"){
       // console.log("pushed 0 [-" + charac + "]");
        result.push("-" + charac);
      } else  if (charac === charac.toUpperCase() && prev && charac !== ' ') {
      //  console.log("pushed 1 [" + charac + "]");
        result.push(charac);
        prev = false;
      } else if (charac === ' ' || charac === '_') {
       // console.log("pushed 2 [-" + charac + "]");
        result.push("-");
      } else {
       // console.log("pushed 3 [" + charac + "]");
        result.push(charac);
      }
    } else {
      result.push(charac);
    }

    if (charac === ' ' || charac === '_') {
      prev = true;
    }
  }
 // console.log(result);
  // hardest case

  return result.join("").toLowerCase();
}
/**
 * flatten nested array.
 * @param arr
 * @return {*}
 */
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  result = flatten(arr, result);
  console.log(result);
  return result;
}

function flatten(arr, result) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], result);
    } else {
      console.log(Array.isArray(arr[i]) + arr[i]);
      result.push(arr[i]);
    }
  }
  return result;
}


