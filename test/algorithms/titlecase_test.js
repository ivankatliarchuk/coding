params = [
  {text: 'mama', result : 'Mama'},
  {text: 'test case', result : 'Test Case'},
  {text: 'HERE IS MY HANDLE HERE IS MY SPOUT', result : 'Here Is My Handle Here Is My Spout'}
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.equal(titleCase(item.text), item.result, item.text + ":" + item.result);
    });
  });
