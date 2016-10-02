params = [
  {array: ["a", "b", "c", "d"], size : 2, result : [["a", "b"], ["c", "d"]]},
  {array: [0, 1, 2, 3, 4, 5, 6, 7, 8], size : 4, result : [[0, 1, 2, 3], [4, 5, 6, 7], [8]]},
  {array: [0, 1, 2, 3, 4, 5, 6, 7, 8], size : 2, result : [[0, 1], [2, 3], [4, 5], [6, 7], [8]]},
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.deepEqual(chunkArrayInGroups(item.array, item.size), item.result, 'fail');
    });
  });
