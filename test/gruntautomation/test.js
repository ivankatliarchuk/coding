(function ($) {
  'use strict';

  QUnit.module('My First JS test: testing component', {
    beforeEach: function (assert) {
      // test fixtures goes here.
      // console.log('setup data');
    },
    afterEach: function (assert) {
      // test cleanup goes here.
    }
  });
  QUnit.test('jquery is here', function (assert) {
    assert.ok($, 'yes, it is here');
  });
  QUnit.test('2 add 2 equals 4', function (assert) {
    assert.ok(2 + 2 === 4, 'Passed');
  });
  QUnit.test('2 add 2 not equals 5', function (assert) {
    assert.notEqual(2 + 2, 5, 'Failed!');
  })

}(jQuery));
