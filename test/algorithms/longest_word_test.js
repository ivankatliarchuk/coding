params = [
  {text: 'The quick brown fox jumped over the lazy dog', result : 6},
  {text: 'What if we try a super-long word such as otorhinolaryngology', result : 19}
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.equal(findLongestWord(item.text), item.result, longest);
    });
  });
