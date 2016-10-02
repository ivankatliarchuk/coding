params = [
  {text: 'aa', number : -1, result : 'aa'},
  {text: 'Peter Piper picked a peck of pickled peppers', number : 14, result : 'Peter Piper...'},
  {text: 'A-', number : 1, result : 'A...'},
  {text: 'Absolutely Longer', number : 2, result : 'Ab...'}
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.equal(truncateString(item.text, item.number), item.result, truncateString(item.text, item.number));
    });
  });
