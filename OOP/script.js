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

//// PROTOTYPES
// each object created through same construcotr func will inherit all methods and properties that are definied on prototype property:
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

slady.calcAge();

console.log(slady.__proto__); // prototype of slady object, essentially it's a prototype property of constructor func
console.log(slady.__proto__ === Person.prototype);

// Person.prototype is not prototype of a Person, but what will be used as a prototype for any future objects made from Person

// to test if it's a protoype of another object:
console.log(Person.prototype.isPrototypeOf(slady));
console.log(Person.prototype.isPrototypeOf(Person));

// setting properties to prototype:
Person.prototype.species = 'Homo Sapiens';

console.log(slady.species, jack.species);

// to check if object has properties of its own, not only inherited ones"
console.log(slady.hasOwnProperty('firstName'));
console.log(slady.hasOwnProperty('species'));

// Prototype chains is series of links between objects, linked through prototypes (similar to the scope chain)
// jonas.__proto__ is Person.prototype
// Person.prototype is Object.prototype (bc person is an object, and when we create objects behind the scenes this is how they get created acctually - {} === new Object(...) )
// and finally Object.prototype is null
