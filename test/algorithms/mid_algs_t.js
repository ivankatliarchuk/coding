
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
