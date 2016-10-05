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
