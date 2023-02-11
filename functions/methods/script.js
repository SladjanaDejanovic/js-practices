"use strict";

/// CALL METHOD

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Sladjana Dejanovic");
lufthansa.book(345, "John Smith");
console.log(lufthansa.bookings);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; //storing a method in external variable. now "this" keyword in it will point to undefiend, bc it's not part of a object anymore, so we have to fix that:

book.call(eurowings, 23, "Sarah Williams"); // calling a method on it (functions can have methods too)

// in call method, first argument is what we want this keyword to point to

console.log(eurowings);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// APPLY METHOD
// doesn't resive a list of arguments after argument for this keyword, it's taking array of arguments
//it's not that usede in modern js

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

//this is mre used today, spreading arguments from array:
book.call(swiss, ...flightData);
