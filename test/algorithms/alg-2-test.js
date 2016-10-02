
sumall = [
  {array: [1, 4], result : 10},
  {array: [5, 10], result : 45},
  {array: [10, 5], result : 45}
];

QUnit
  .test('summ all numbers', function (assert) {
    sumall.forEach(function (item) {
      assert.deepEqual(sumAll(item.array), item.result, 'fail');
    });
  });

diffarrays = [
  {arrayf: [1, 2, 3, 5], arrays: [1, 2, 3, 4, 5], result : [4]},
  {arrayf: ["andesite", "grass", "dirt", "dead shrub"], arrays: ["andesite", "grass", "dirt", "dead shrub"], result : []},
  {arrayf: [], arrays: ["snuffleupagus", "cookie monster", "elmo"], result : ["snuffleupagus", "cookie monster", "elmo"]},
];

QUnit
  .test('diff arrays', function (assert) {
    diffarrays.forEach(function (item) {
      assert.deepEqual(diffArray(item.arrayf, item.arrays), item.result, 'fail');
    });
  });

telephons = [
  {number: '1 555-555-5555',  result : true},
  {number: '1 555-555-5555',  result : true},
  {number: '555-555-5555',  result : true},
  {number: '(555) 555-5555',  result : true},
  {number: '5555555555',  result : true},
  {number: '1 555 555 5555',  result : true},
  {number: '555-5555',  result : false},
  {number: '1 555)555-5555',  result : false},
];

QUnit
  .test('diff arrays', function (assert) {
    telephons.forEach(function (item) {
      assert.deepEqual(telephoneCheck(item.number), item.result, item.number);
    });
  });
