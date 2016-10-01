// Setup
var collection = {
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
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

/**
 * Rules:
 * 1.
 * 2.
 * 3.
 */
// Only change code below this line
/**
 * Method to return entire collection object.
 * @param id album identifier.
 * @param prop property name.
 * @param value to update.
 * @returns value.
 */
function updateRecords(id, prop, value) {

  if (prop !== "tracks") {
    if (collection[id].hasOwnProperty(prop)) {
      collection[id][prop] = value;
    } else {
      collection[id][prop] = value;
    }
  }
  if (prop === "tracks")
  if (value.length > 0 && collection[id].hasOwnProperty(prop) ) {
    collection[id][prop].push(value);
  } else if (value.length > 0) {
    collection[id][prop] = [value];
  //  collection[id][prop].push(value);
  }
  //console.log(JSON.stringify(collection));
  return collection;
}

function set(value) {
  collection = value;
}

