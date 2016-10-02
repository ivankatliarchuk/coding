params = [
  {arguments: ([1, 2, 3, 1, 2, 3], 2, 3), result : [1, 1]},
  {arguments: ([2, 3, 2, 3], 2, 3), result : []},
  {arguments: ([3, 5, 1, 2, 2], 2, 3, 5), result : [1]}
];

// QUnit
//   .test('factorize', function (assert) {
//     params.forEach(function (item) {
//       assert.deepEqual(destroyer(item.arguments), item.result, 'failt');
//     });
//   });


QUnit.test('clarigy', function (assert) {
    assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'failt');
});

params = [
  {array: [1, 2, 3, 4], num : 1.5, result : 1},
  {array: [5, 3, 20, 3], num : 5, result : 2},
];
QUnit.test('index', function (assert) {
  params.forEach(function (item) {
       assert.deepEqual(getIndexToIns(item.array, item.num), item.result, 'failt');
  });
});


encryption = [
  {encoded: 'S', decoded : 'F'},
  {encoded: 'N', decoded : 'A'},
  {encoded: 'N', decoded : 'A'},
  {encoded: 'SERR PBQR PNZC', decoded : 'FREE CODE CAMP'},
  {encoded: 'GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', decoded : 'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.'},
];
QUnit.test('cipher', function (assert) {
  encryption.forEach(function (item) {
    assert.deepEqual(cipherRot13(item.encoded), item.decoded, 'failt');
  });
});
