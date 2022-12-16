"use strict";

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear) {
  const age = calcAge(birthYear);
  // const retirement = 65 - age;
};

console.log(yearsUntilRetirement(1994));

// if (retirement > 0) {
//   console.log(`${firstName} reitres in ${retirement} years`);
//   return retirement;
// } else {
//   console.log(`${firstName} has already retired`);
//   return -1;
// }
// this if part was outside the function, that's why it didn't work.. and that return that wasn't working bc of some previous lines of code that i forgot to comment out
