'use strict';

// CONSTRUCTOR FUNCTIONS (always starts with capital letter)

// arrow func will not work as function constructor, bc it doesn't have its own this kw
const Person = function (firstName, birthYear) {
  // Instance properties - will be available on all instances that are created through this constructor func
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER create method inside constructor func
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const slady = new Person('Slady', 1994);
console.log(slady);

// 1. New empty object is created
// 2. func is called, this kw will be set to this newly created object
// 3. this newly created object is linked to the prototype
// 4. func automatically returns object

const jack = new Person('Jack', 1975);
const matilda = new Person('Matilda', 2015);
console.log(jack, matilda);

console.log(slady instanceof Person);
