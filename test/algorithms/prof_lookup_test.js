var params = [
  {name: 'Kristian', property : 'lastName', data : "Vos"},
  {name: 'Sherlock', property: 'likes', data : ['Intriguing Cases', 'Violin']},
  {name: 'Bob', property: 'number', data : "No such contact"},
  {name: 'Akira', property: 'address', data : "No such property"}
];

QUnit
  .test('Parametrized test', function (assert) {
    params.forEach(function (item) {
      assert.deepEqual(lookUpProfile(item.name, item.property), item.data);
    });
  });
