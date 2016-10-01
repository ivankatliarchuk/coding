'use strict';

var params;
QUnit.module('Algorithms testing', {
  beforeEach: function (assert) {

  },
  afterEach: function (assert) {
  }
});
QUnit.test('jquery is here', function (assert) {
  assert.ok($, 'yes, it is here');
});



var firstCase = {
  "2548": {
    "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
      "artist": "Prince",
      "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
      "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold",
    "artist": "ABBA"
  }
};


var fixedCollection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

var pushedFree = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette",
      "Free"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

var addictedToLove = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [
      "Addicted to Love"
    ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

var takeAChance = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold",
    "tracks": [
      "Take a Chance on Me"
    ]
  }
};


params = [
  {number : 5439, property : 'artist', value : 'ABBA', data : firstCase},
  {number : 2468, property : 'tracks', value : 'Free', data : pushedFree}
];

QUnit
  .test('Parametrized test', function (assert) {
    params.forEach(function (item) {
      assert.deepEqual(updateRecords(item.number, item.property, item.value), item.data, JSON.stringify(collection));
      set(fixedCollection);
    });


    // assert.deepEqual(updateRecords(5439, "tracks", "Take a Chance on Me"), takeAChance, JSON.stringify(collection));

    /*collection = fixedCollection;
     assert.equal(updateRecords(2548, "artist", ""), undefined, 'Test');
     assert.equal(collection[2548]['artist'], undefined, JSON.stringify(collectionCopy));*/
  });

QUnit.test('addicted test', function (assert) {
  assert.deepEqual(updateRecords(1245, "tracks", "Addicted to Love"), addictedToLove, JSON.stringify(collection));
});
