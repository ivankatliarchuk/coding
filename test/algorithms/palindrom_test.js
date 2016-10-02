params = [
  {text: 'aa', result : true},
  {text: 'aba', result : true},
  {text: 'hello', result : false},
  {text: '2A3*3a2', result : true},
  {text: '4oeo', result : false},
  {text: ' oeo', result : true},
  {text: '_aea', result : true},
  {text: 'o*&=#eo', result : true},
  {text: 'racecar', result : true},
  {text: 'race CAR', result : true},
  {text: '0_0 (: /-\ :) 0-0', result : true},
  {text: 'five|\_/|four', result : false},
  {text: 'A man, a plan, a canal. Panama', result : true},
  {text: '1 eye for of 1 eye.', result : false},
];

QUnit
  .test('factorize', function (assert) {
    params.forEach(function (item) {
      assert.equal(palindrome(item.text), item.result, sanitized1);
    });
  });
