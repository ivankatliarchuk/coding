describe("Person", function () {
  var person;

  beforeEach(function () {
    person = new Person('Bob Marley');
  });

  it ('should be able to retrieve a full name', function () {
    expect(person.getFullName()).toEqual('Bob Marley');
  });

  it ('should be able to retrieve a last name', function () {
    expect(person.getLastName()).toEqual('Marley');
  });

  it ('should be able to retrieve a first name', function () {
    expect(person.getFirstName()).toEqual('Bob');
  });

  it ('should be able to set a first name', function () {
    spyOn(person, 'setFirstName');
    person.setFirstName('John');
    expect(person.setFirstName).toHaveBeenCalledWith('John');
  });

  it ('should be able to set a last name', function () {
    spyOn(person, 'setLastName');
    person.setLastName('Do');
    expect(person.setLastName).toHaveBeenCalledWith('Do');
  });

  it ('should be able to change first name', function () {
    person.setFirstName('Haskel');
    expect(person.getFullName()).toEqual('Haskel Marley');
  });

  it ('should be able to change last name', function () {
    person.setLastName('Hammon');
    expect(person.getFullName()).toEqual('Bob Hammon');
  })

});
