sumprimes= [
  {input: 10, output : 17},
  {input: 977, output : 17},
];

QUnit
  .test('primes', function (assert) {
    sumprimes.forEach(function (item) {
      assert.equal(sumPrimes(item.input), item.output, item.input);
    });
});
