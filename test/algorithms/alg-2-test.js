
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

sumdiff = [
  {first: [1, 2, 4], second: [3, 6], third: [], result : [1, 2, 3, 4, 6]},
  //{first: [1, 2, 5], second: [2, 3, 5], third: [3, 4, 5],  result : [1, 4, 5]},
];

QUnit
  .test('symmetric difference', function (assert) {
    sumdiff.forEach(function (item) {
      assert.deepEqual(sym(item.first, item.second, item.third), item.result, item.first);
    });

  });

romannumbers = [
  {input: 2, result: 'II'},
  {input: 3, result: 'III'},
  {input: 5, result: 'V'},
  {input: 9, result: 'IX'},
  {input: 12, result: 'XII'},
  {input: 16, result: 'XVI'},
  {input: 29, result: 'XXIX'},
  {input: 44, result: 'XLIV'},
  {input: 45, result: 'XLV'},
  {input: 68, result: 'LXVIII'},
  {input: 83, result: 'LXXXIII'},
  {input: 97, result: 'XCVII'},
  {input: 99, result: 'XCIX'},
  {input: 500, result: 'D'},
  {input: 501, result: 'DI'},
  {input: 649, result: 'DCXLIX'},
  {input: 798, result: 'DCCXCVIII'},
  {input: 891, result: 'DCCCXCI'},
  {input: 1000, result: 'M'},
  {input: 1004, result: 'MIV'},
  {input: 1006, result: 'MVI'},
  {input: 1023, result: 'MXXIII'},
  {input: 2014, result: 'MMXIV'},
  {input: 3999, result: 'MMMCMXCIX'}
];

QUnit
  .test('roman numbers', function (assert) {
    romannumbers.forEach(function (item) {
      assert.equal(convertToRoman(item.input), item.result, item.input);
    });

  });

lettersmissing = [
  {input: 'abce', result: 'd'},
  {input: 'abcdefghjklmno', result: 'i'},
  {input: 'bcd', result: undefined},
  {input: 'yz', result: undefined},
];
QUnit
  .test('missing letters', function (assert) {
    lettersmissing.forEach(function (item) {
      assert.equal(fearNotLetter(item.input), item.result, item.input);
    });

  });

orbitalperiods = [
  {input: [{name : "sputnik", avgAlt : 35873.5553}], result: [{name : "sputnik", orbitalPeriod : 86400}]}
];
QUnit
  .test('orbital periods', function (assert) {
    orbitalperiods.forEach(function (item) {
      assert.equal(orbitalPeriod(item.input), item.result, item.input);
    });

  });
