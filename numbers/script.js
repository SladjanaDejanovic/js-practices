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

//////////////////////////////
//////// Math   ///////////////

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

//////////////////////////////////////
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

//////////////////////////////
////// Remainder operator (remainder of a division)
///////////////////////
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

// check if any number is divisible by another - if remainder is 0 thaen it is
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(81));
console.log(isEven(3476));

////////////////////////////////
/////// Numeric separators
const diameter = 287_460_000_000;
console.log(diameter);

// we can place these separates anywhere we want, it makes numbers easier to read but doesn't affect js, it's just gonna ignore it

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

// turning strings that contain underscores into numbers would not work:
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230

/////////////////////////////////////////////////
////// BigInt - big integer
// biggest number js safely can represent:
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// with BIgInt now we can store numbers as big as we want
console.log(34576541258674534594135465764653124n);
console.log(BigInt(123146476456));

// operations
console.log(10000n + 10000n);
console.log(231454864128451n + 10000000n);

const huge = 125489796834786475344n;
const num = 23;
console.log(huge * BigInt(num));
// console.log(huge * num); //can't mix BigInt with regular numbers:

// exeptions - logial operations and string concatenations
console.log(20n > 15); // true
console.log(20n === 15); // false
console.log(20n == 20); // true

console.log(huge + ' is REALLY big number!!!');

// divisions
console.log(10 / 3); // 3.3333333...
console.log(10n / 3n); // 3n

////////////////////////////////////
/////// Data and Time

// Create date
// with  new Date () constructor
const now = new Date();
console.log(now);

// parsing a date string (unrealable to do it on your own)
console.log(new Date('Mon Mar 13 2023 18:46:51'));
console.log(new Date('December 24, 2015'));

console.log(new Date(2037, 10, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// dates are objects, so they have methods:
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // day of month
console.log(future.getDay()); // day in week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //timestamp is miliseconds passed since 01 january 1970

// creating date based on timestamp
console.log(new Date(2142253380000));

// current timestamp, for this exact moment
console.log(Date.now());

future.setFullYear(2040);
console.log(future);
