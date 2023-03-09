'use strict';

//in JavaScript, all numbers are presented internally as floating point numbers. So basically, always as decimals, no matter if we actually write them as integers or as decimals.

// console.log(23 === 23.0);

// numbers are represented internally in a 64 base 2 format (numbers are always stored in binary format), they are only composed of 0s and 1s

// console.log(0.1 + 0.2); // we get an infinite fraction
// console.log(0.1 + 0.2 === 0.3); // this results in falase, which is incorect, so we can't use js for precise scientific calculations. it's nan error in js tha we have to accept

// to convert into numbers
// console.log(Number('23'));

// easier way is to add + infront of a string, bc then js will do type coersion, converts all operants to numbers
// console.log(+'23');

// console.log(Number('23') === +'23');

////////////////////////
///  Parsing (number form a string) ////////

// js will figure out what is the number in this string and return that, but string needs to start with a number
// console.log(Number.parseInt('30px', 10)); // parse integer - withoud a decimal
// it accepts seconf parameter called regex (regex is the base of the numeral system that we are using)
// we are almost always using base 10 system (0-9), so as a 2nd parameter we put in 10
// if we are working with binary, we'd put 2

// console.log(Number.parseFloat('2.5rem')); // with decimals
// console.log(Number.parseInt('2.5rem')); // we only get 2 here

// this parse func are global, we dont have to call them on Number:
// console.log(parseFloat('2.5rem'));
// but in modern js is more incouraged to call it on Number object (Number provide namespace)

//////////////////
///// isNaN - to check if any value is not a number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));

//////////////////////
//// isFinite - better way to check if it's a number, real number not a string
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));

////////////
///// isInteger
// console.log(Number.isInteger(20.5));
// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.0));

///////////////////
//////// Math            ///////////////

//squere root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

//cubic root
console.log(8 ** (1 / 3));

// maximum value
console.log(Math.max(5, 18, 23, 11, 2));
// it odeas type coersion
console.log(Math.max(5, 18, '23', 11, 2));
// but no parsing
console.log(Math.max(5, 18, '23px', 11, 2));

// minimum
console.log(Math.min(5, 18, 23, 11, 2));

// there are also constatnts on Math object (Math namespace)

// calc area of a circle with radius 10px
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// generate random value between 2 integers
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
// 0 ...1 -> 0 ... (max-min) -> min...max
console.log(randomInt(10, 20));

///////////////////////////
////// Rounding  /////////////

// integers
console.log(Math.trunc(23.3)); // removes decimal part
console.log(Math.round(23.3)); // to nearest

console.log(Math.ceil(23.9)); // round up
console.log(Math.ceil(23.3));

console.log(Math.floor(23.3)); // round down
console.log(Math.floor('23.9'));

//decimals
console.log((2.7).toFixed(0)); //it will return a string
console.log((2.7).toFixed(3)); // 3 is for 3 decimal parts
console.log(+(2.7356).toFixed(2)); //shortening to 2 decimals
