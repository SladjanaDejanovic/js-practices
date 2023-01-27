"use strict";

const airline = "Air Serbia";
const plane = "A320";

console.log(plane[0]);
//this works the same:
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

////// methods

// what we get it's called sub-string, bc it's just a part of original string
// all methods always return a new string, so if we wanna use those substrings we have to store them in variables

// first ocurance of this letter:
console.log(airline.indexOf("r"));
// for last:
console.log(airline.lastIndexOf("r"));

console.log(airline.indexOf("Serbia")); // case sensitive

// extracting parts of string with slice method:
console.log(airline.slice(4)); // number is a position from where the extraction will start
console.log(airline.slice(4, 7)); // numbers are positions for beginning and ending of extraction

// when we don't know the string we're gonna recieve
console.log(airline.slice(0, airline.indexOf(" "))); // extracting first word (until first space)
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // extracting only last word (+! is for not showing a space)

// start extracting from the end of a string:
console.log(airline.slice(-2));
console.log(airline.slice(1, -1)); // without first and last letter

// check if it's a seat in the middle (B and E are middle seats)
const checkMiddleSeat = function (seat) {
  // we need a letter,so that means last character of a string
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// strings are primitives, so why then they have methods?
// js behind the scenes converts string into a string object whenever we call a method. this is called "boxing". and when the operation is done the object is converted back to regular string primitive
console.log(new String("slady"));
console.log(typeof new String("slady"));
console.log(typeof new String("slady").slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// console.log("slady".toUpperCase()); // could be used directly on a string

// Fix capitaliztion in name
const passenger = "sLAdY"; // Slady
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
