'use strict';

//////////////////////////////
/// Constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// we want a child class to have some additional functionalities, so usually we pass in the same argumnets but also some aditional ones

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
