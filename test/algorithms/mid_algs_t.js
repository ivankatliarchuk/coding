
cashRegister = [
  /*{price : 19.50, cash : 20.00, cid : [["PENNY", 1.01],
    ["NICKEL", 2.05], ["DIME", 3.10],
    ["QUARTER", 4.25], ["ONE", 90.00],
    ["FIVE", 55.00], ["TEN", 20.00],
    ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]],
    change : [["QUARTER", 0.50]]},
  {price : 3.26, cash : 100.00, cid : [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25],
    ["ONE", 90.00], ["FIVE", 55.00],
    ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]],
    change : [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50],
      ["DIME", 0.20], ["PENNY", 0.04]]},*/
  /*{price : 19.50, cash : 20.00, cid : [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
    ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]],
    change : 'Insufficient Funds'},*/
  {price : 19.50, cash : 20.00, cid : [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
    ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]],
    change : 'Closed'},
];

QUnit
  .test('cash', function (assert) {
    cashRegister.forEach(function (item) {
      assert.deepEqual(checkCashRegister(item.price, item.cash, item.cid), item.change, 'failed');
    });
  });

sumprime = [
  {input: 10, output: 17},
  {input: 977, output: 73156},
];
QUnit
  .test('prime', function (assert) {
    sumprime.forEach(function (item) {
      assert.deepEqual(sumPrimes(item.input), item.output, 'failed');
    });
  });


orbitals = [
  {input: [{name : "sputnik", avgAlt : 35873.5553}], output: [{name: "sputnik", orbitalPeriod: 86400}]},
  {input: [{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}],
    output: [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]}
];
QUnit
  .test('orbital', function (assert) {
    orbitals.forEach(function (item) {
      assert.deepEqual(orbitalPeriod(item.input), item.output, 'failed');
    });
  });

/*pairnumbers = [
    {input: [1, 2, 3], summ: 3, result: 1}
];

QUnit
  .test('pairs', function (assert) {
    pairnumbers.forEach(function (item) {
      assert.deepEqual(pairwise(item.input, item.summ), item.result, 'failed');
    });
  });*/

dropelements = [
  {input: [1, 2, 3], func: function (n) {
    return n < 3;
  }, result: [1,2]}
];

/*QUnit
  .test('drop element', function (assert) {
    dropelements.forEach(function (item) {
      assert.deepEqual(dropElements(item.input, item.func), item.result, 'failed');
    });
  });*/

symsSymetric = [
  {input: [[1, 2, 3], [5, 2, 1, 4]], result: [3, 4, 5]},
  {input: [[1, 2, 3], [5, 2, 1, 4]], result: [3, 4, 5]},
  {input: [[1, 2, 5], [2, 3, 5], [3, 4, 5]], result: [1, 4, 5]},
  {input: [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]], result: [1, 4, 5]},
  {input: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]], result: [2, 3, 4, 6, 7]},
];

QUnit
  .test('sym symmetric', function (assert) {
    symsSymetric.forEach(function (item) {
      assert.deepEqual(symSimetic(item.input), item.result, 'failed');
    });
  });

commons = [
  {input : [3, 7], result: 21},
];

QUnit
  .test('smallest common', function (assert) {
    commons.forEach(function (item) {
      assert.deepEqual(smallestCommons(item.input), item.result, 'failed');
    });
  });


/*combination = [
  {input: ['a', 'b'], result: ['a', 'ab', 'b']}
];

QUnit
  .test('drop element', function (assert) {
    combination.forEach(function (item) {
      assert.deepEqual(getCombinations(item.input), item.result, 'failed');
    });
  });*/

toReplace = [
  {str : "A quick brown fox jumped over the lazy dog", before : "jumped", after : "leaped",
    result : "A quick brown fox leaped over the lazy dog"},
  {str : "He is Sleeping on the couch", before : "Sleeping", after : "sitting",
    result : "He is Sitting on the couch"},
  {str : "Let us go to the store", before : "store", after : "mall",
    result : "Let us go to the mall"},
  {str : "His name is Tom", before : "Tom", after : "john",
    result : "His name is John"},
];

QUnit
  .test('replace string', function (assert) {
    toReplace.forEach(function (item) {
      assert.deepEqual(myReplace(item.str, item.before, item.after), item.result, 'failed');
    });
  });

booleans = [
  {input: true, result : true},
  {input: false, result : true},
  {input: [1, 2, 3], result : false},
  {input: [].slice, result : false},
  {input: 1, result : false},
  {input: NaN, result : false},
  {input: 'a', result : false},
];
QUnit
  .test('is boolean', function (assert) {
    booleans.forEach(function (item) {
      assert.deepEqual(booWho(item.input), item.result, 'failed');
    });
  });
