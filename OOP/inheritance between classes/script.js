'use strict';

//////////////////////////////
/// CONSTRUCTOR FUNCTIONS

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// we want a child class to have some additional functionalities, so usually we pass in the same arguments but also some aditional ones

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // in order to keep up with DRY and in case that implemetation of Person changes in future:

  Person.call(this, firstName, birthYear); // we have to use .call(), bc if just call Person function as a regular function, this kw in it will be undefined, by using .call() it will set this kw
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // with this Student is now the object that inherits from Person.prototype

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2015, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);

console.dir(Student.prototype.constructor);
//  prototype.constructor should show to that object, in this case it should be Student. Instead it showed Person. Bc we need to relly on constructor, we fix this by:

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//////////////////////////////////////////////
// ES6 CLASSES

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

// extends kw links StudenCl to parent object:

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // always needs to happen first:
    super(fullName, birthYear); // in super function we are passing arguments for parent constructor function
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// some child objects won't have additional arguments, (it's not mandatory to add different arguments) could be same as parent, in this case they will have additional methods and  share properties of parent object (so in some cases we won't specify any different this kw than what parent already has) and we would't need to write constructor func, this super() will automatically be called

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

////////////////////////////////
// OBJECT.CREATE()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
