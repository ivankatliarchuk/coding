params = [
  {array: [[1, 8, 9, 6]], result : [9]},
  {array: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], result : [5, 27, 39, 1001]},
  {array: [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]], result : [9, 35, 97, 1000000]}
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.deepEqual(largestOfFour(item.array), item.result, 'fail');
    });
  });
