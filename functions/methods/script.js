"use strict";

/// ***********   CALL METHOD ****************

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

//// ******  APPLY METHOD ***********
// doesn't recieve a list of arguments after argument for this keyword, it's taking array of arguments
//it's not that used in modern js
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

//this is more used today, spreading arguments from array:
book.call(swiss, ...flightData);

/////  ********    BIND METHOD **************
// like call method, bind method allows us to manually set this keyword for any function call
// difference is that bind doesn't immediately call the func, instead it retunrs a new func where the this keyword is bound

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

//in bind method we can pass multiple parameteres too, and all of these arguments will be defined and func will always be called with these same arguments (partial application - part of the arguments of original function are already applied)

//a book func for specific airline and specific flight number:
const bookEW23 = book.bind(eurowings, 23);
//now this func only needs name (bc (flightNum, name), we defined flight number, and now when we call this function we only pass in name):

bookEW23("Sladjana Dejanovic");
bookEW23("Martha Cooper");

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// after we use buyPlane as handler func, this keyword in it now points to the button, bc button is the element calling it. so we have to specify this keyword, using bind method

// Partial application (preset arguments)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//now we want to preset rate always. first argument in bind method is always this kw, but we don't care bout that in this case, so we'll set it to null. order of arguments is important
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23 // this is the same as above

console.log(addVAT(100));
console.log(addVAT(23));

const addVATFunc = function (rate) {
  return function value(value) {
    return value + value * rate;
  };
};

const addVATFunc23 = addVATFunc(0.23);
console.log(addVATFunc23(100));
