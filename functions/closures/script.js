"use strict";

// Any function always has access to the variable environment of the execution context in which the function was created.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengeres`);
  };
};

const booker = secureBooking(); // closure gives a func access to all variables of its parent func, even after parent func has returned
//closure makes sure that a function does never lose connection to the variables that existed at the function's birthplace

booker(); // that's why this function now can change variable passengerCount, so it's now 1
booker(); // now it's 2 passengers
booker(); // 3 passengers

// closure is like a backpack that a func carries around wherever it goes. this backpack has all the variables that were present in the environment where the function was created

// we are not creating closures, this is something js does behind the scenes, we can observe it happening

console.dir(booker);

// another example for closure:

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); // by calling this function we are changing f variable, now it's a function that does something (if we don't call it first, f is not gonna be changed), g will asign something to f
f(); // even when we didn't specify f variable, we just created it in global scope, we did change it in g function, so now it is changed

h(); // re-asigning f function again by calling h func
f();

console.dir(f);

// example 3:

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); //firts parameter is func we wanna execute, second parameter is number of miliseconds after which func will be executed

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
