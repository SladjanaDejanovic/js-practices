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
