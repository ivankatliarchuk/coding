params = [
  {txt: 'aa', result : "aa"},
  {txt: 'aba', result : "aba"},
  {txt: 'hello', result : "olleh"},
  {txt: 'Howdy', result : "ydwoH"},
  {txt: 'Greetings from Earth', result : "htraE morf sgniteerG"}
];

QUnit
  .test('Parametrized test', function (assert) {
    params.forEach(function (item) {
      assert.deepEqual(reverseString(item.txt), item.result);
    });
  });
