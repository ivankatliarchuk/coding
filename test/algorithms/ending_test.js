params = [
  {text: 'aa', target : 'a', result : true},
  {text: 'Ivanka', target : 'a', result : true},
  {text: 'Ivanka', target : 'b', result : false},
  {text: 'Ivanka', target : 'ka', result : true},
  {text: 'Open sesame', target : 'pen', result : false},
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.equal(confirmEnding(item.text, item.target), item.result, 'fail');
    });
  });
