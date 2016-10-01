params = [
  {number: 1, result : 1},
  {number: 2, result : 2},
  {number: 3, result : 6},
  {number: 10, result : 3628800},
  {number: 20, result : 2432902008176640000},
  {number: 0, result : 1}
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.equal(factorialize(item.number), item.result);
    });
  });
