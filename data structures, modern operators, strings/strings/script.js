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
// ALL METHODS ALWAYS RETURN A NEW STRING, so if we wanna use those substrings we have to store them in variables

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

// Comparing emails
const email = "hello@slady.com";
const loginEmail = " Hello@Slady.Com \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //trim() cuts spaces
console.log(trimmedEmail);
// we can do it all in one go:
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

/// Replace parts of strings
const priceGB = "288,97₤";
const priceUS = priceGB.replace("₤", "$").replace(",", "."); // first argument is whawt we want to replace, second is a string that will be replacing it
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate")); // to replace all occurrances of this word, not only first one

//regular expression (to target all of the occurrances of "door"):
console.log(announcement.replaceAll(/door/g, "gate")); //puting the string inside // and adding g that stands for global

// methods are case sensitive

/// Booleans
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("boing"));
console.log(plane1.startsWith("Air"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// Practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

////// Split (storying parts of string as elements of new array)
console.log("a+very+nice+string".split("+"));
console.log("Sladjana Dejanovic".split(" "));

const [firstName, lastName] = "Sladjana Dejanovic".split(" ");
console.log(firstName);

///// Join
const newName = ["Mrs.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // same result with replace():
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("sladjana dejanovic");

//// Padding - is adding characters to the string until that string reaches a desired length

const message = "Go to gate 23!";
console.log(message.padStart(25, "+")); //adding from start, first argument is how many final length of a string, and then what we're adding to the string
console.log(message.padStart(25, "+").padEnd(30, "+"));

// practice
const maskCreditCard = function (number) {
  const str = number + ""; // this will make number into a string, bc if one of the operatnts with + is a string it will convert all others into a string. we can make number into a string like this too: String()
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(2564567634575545));
console.log(maskCreditCard(2415776567511475));

//// Repeat

const message2 = "Bad weather... All departures delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in the line ${"✈".repeat(n)}`);
};
planesInLine(4);
planesInLine(3);
planesInLine(12);

/// string practice:

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(45);
  console.log(output);
}
