'use strict';
///////////////////////////
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

////////////////////////////////
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

/////////////////////////
// PROTOTYPAL INHERITANCE
// Prototype chains is series of links between objects, linked through prototypes (similar to the scope chain)
// jonas.__proto__ is Person.prototype
// Person.prototype is Object.prototype (bc person is an object, and when we create objects behind the scenes this is how they get created acctually - {} === new Object(...) )
// and finally Object.prototype is null

console.dir(Person.prototype.constructor);
console.log();

const arr = [3, 6, 4, 7, 9, 2, 4, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// new Array === []  -  arrays are created by array construcotr. that's why al; arrays, as objects, have access to all of those methods, they inherited that from Array.prototype

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
// it's a bad practice to add methods on arrays, bc in the future js might add a method with the same name that works differently, adn when working witha a team of developers, there can be a lot of bugs if there are same methods with different names and such

////////////////////////
// ES6 CLASSES
// cleaner, more modern way of creating objects

// class expression
// const PersonCl = class {} // classes are special types of functions, they don't have arguments

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property of the class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // setteres are usefull for data validation
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    // when we're setting property that has same name as some parameter, as a convention we write it with underscore (different variable name to avoid naming conflict)
    else alert(`${name} is not a full name!`);
  }

  // to fix this we also need a getter for this property
  get fullName() {
    return this._fullName;
  }
  //(the acctual property name is still with underscore, but we can access it simply like this jessica.fullName now)

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}!`);
// };

jessica.greet();

// 1. Classes are NOT hoisted (can't be used before they are declared in the code, unlike function declarations)
// 2. Classes are first-class citizens (we can pass them to func and return them from funcs)
// 3. Body of a class is always executed in strict mode (even if we don't write our code in strict mode)

/////////////////////////
// Accessor properties - SETTERS AND GETTERS

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // setters have 1 parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

// get
console.log(account.latest); // we don't call it, but write it as if it was just a property

// set
account.latest = 50;
console.log(account.movements);

//////////////////////////
// STATIC METHOD

// Array.from method converts any array like structure to real array
console.log(Array.from(document.querySelectorAll('h1')));

// .from() is attached to Array constructor, not on prototype property of the construcotr, so [1,2,3].from() doesn't work, all the arrays do not inherit this method

// for example Number.parseFloat() is also static method

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey(); // this is not inherited
// jonas.hey(); // -this doesn't work

// to create static method in class- look line 124
PersonCl.hey();

////////////////////////
/// OBJECT.CREATE()
// no need for constructor functions and prototype property

// we can use Object.create to manually set the prototype of a object, to any other object that we want

// creating object that we want to be prototype for other objects (with object literal):
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// creating an object, and pass in what we want to be prototype of that object:
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979); // programmatically adding properties to newly created object by using method that it inherited from its prototype
sarah.calcAge();

//////////////////////////////////

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;
  // _movements = [];

  // 2) Private fields (instances)
  #movements = [];
  #pin; // here it will undefined...

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin; //.. and here will be set to the value we recieved
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening account, ${owner}`);
  }

  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4) Private methods - still not available in Chrome
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// instead of interacting with properties directly, like this:
// acc1.movements.push(250);
//it's better to create methods that will interact with properties:

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);

acc1.requestLoan(1000);
// acc1.approveLoan(1000);

///////////////////////
// ENCAPSULATION - protected propertis and methods

// with convention - adding underscore before name, this doesn't raelly make data private, so we call this PROTECTED PROPERTY. This property is not supposed to be touched outside of the class. If we want to do that, then we'l have to implement a public method for it

console.log(acc1.getMovements());

///////////////////
// Class fields
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also static verseion) - static won't be availble on all the instances but only on class itself, useful for helper functions
Account.helper();

// we can think of a field like a property that's gonna be on all instances (in our example those are movements and locale) - we are not getting it from constructor of an object, where properties might have different values based on input of every new object.. fields will be same for all objects
// fields can't be defined in the construcotr

// 2)- properties are really not accessable from the outside of the class, using # before name of property
// console.log(acc1.#movements); // error: be declared in an enclosing class

//4) useful to hide implementation details from the outside

///////////////////
// Chaining methods

// - we have to return object before calling next method (look lines with deposit() and withdraw())
// return this   mkaes methods chainable

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
