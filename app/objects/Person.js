/**
 * Person class.
 * @param firstAndLast
 * @constructor
 */
var Person = function (firstAndLast) {
  var fullName = firstAndLast;
  var firstName = fullName.split(' ')[0];
  var lastName = fullName.split(' ')[1];

  this.getFullName = function () {
    return fullName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFirstName = function () {
    return firstName;
  };

  this.setFirstName = function (name) {
    firstName = name;
    array = fullName.split(' ');
    array[0] = firstName;
    fullName = array.join(' ');
  };

  this.setLastName = function (name) {
    lastName = name;
    array = fullName.split(' ');
    array[1] = lastName;
    fullName = array.join(' ');
  };
};
