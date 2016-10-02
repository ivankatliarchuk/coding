params = [
  {array: ["hello", 'Hello'], result : true},
  {array: ["hello", 'hey'], result : false},
  {array: ["zyxwvutsrqponmlkjihgfedcba", "qrstu"], result : true}
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.equal(mutation(item.array), item.result, 'failt');
    });
  });
