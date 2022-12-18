"use strict";
/*
data structures in js: arrays and objects

array is like a big container that we can put variables and later reference them

*/

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

//to check how many elements are in array:
console.log(friends.length);
//to get last element in array:
console.log(friends[friends.length - 1]);

//to change array:
friends[2] = "Jay";
console.log(friends);

//in [] js expects expressions (something that produces a value), not a statements, so we can even calculate something in a position of some element, use a variable that was already declared, put another array in:
const firstName = "Sladjana";
const slady = [firstName, "Dejanovic", 2022 - 1994, "frontend dev", friends];
console.log(slady);

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
