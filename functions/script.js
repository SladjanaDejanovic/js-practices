"use strict";
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // this only works if parameter is defined before( in this case if numPassengers is defined before price)
) {
  //ES5 way of setting defaul values
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  //ES6 way is setting default values while defining functions parameters (numPassenger = 1, price = 199)

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
//if we wanna skip second parameter, only use flight number and price:
createBooking("LH123", undefined, 5); // this is the same as not declaring second argument, so in console it will have default value

const flight = "LH234";
const slady = {
  name: "Sladjana Dejanovic",
  passport: 2345689405,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Ms." + passenger.name;

//   if (passenger.passport === 2345689405) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// checkIn(flight, slady);
// console.log(flight);
// console.log(slady);

// passing primitive type in a func is the same as crating a copy outside of the function, the value is simply copied
// when passing a object, it's like copying that object, so whatever we change in a copy will also change in the original

// passing by value and passing by reference - in js there's no passing by reference(we pass the refrence to the function but not pass by refrence)

// Functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord); //when we pass in a function as an argument we are not calling it

const high5 = function () {
  console.log("🖐🏼");
};

document.body.addEventListener("click", high5);

["Jonas", "Marta", "Adam"].forEach(high5);

//// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

// chalenge

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hi")("Jonas");

///// IIFE - Immediately Invoked Function Expressions

/// executing func immediatelly, without saving it somewhere, for one use

// putting it in () we transform it into expression, and then adding ()after expression we immediatelly call this function
(function () {
  console.log("This will never run again");
})();
// works with arrow func too
(() => console.log("This will ALSO never run again"))();

//function create scopes, and one scope doesn't have access to variables form inner scope
// variables get incapsulated inside their scope (data incapsulation)
