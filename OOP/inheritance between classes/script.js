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

  // in order to keep up with DRY and in case that implemetation of PErson changes in future:

  Person.call(this, firstName, birthYear); // we have to use .call(), bc if just call Person function as a regular function, this kw in it will be undefined, by using .call() it will set this kw
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2015, 'Computer Science');
console.log(mike);
mike.introduce();
