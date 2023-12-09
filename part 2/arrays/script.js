"use strict";
/*
data structures in js: arrays and objects


*/

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

//to check how many elements are in array:
console.log(friends.length);
//to get last element in array:
console.log(friends[friends.length - 1]);

//to change item in array:
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
// console.log(ages);

//////Adding elements
//to add an element to the end array:
friends.push("Peter");
// console.log(friends);

//if we wanna add something then check how long array is, store it in a variable then call it in console.log:
// const newLenght = friends.push("Bob");

//to add element on the beginning of the array:
friends.unshift("John");
// console.log(friends);

///Removing elements
//remove last el:
friends.pop(); ///we can do this as many as we want, so we can have this:
// friends.pop();
// friends.pop();
console.log(friends);

//to return what element was removed:
const popped = friends.pop();
console.log(popped);

//to remove first el:
friends.shift();
console.log(friends);

/////method that tells in which position is certain el in array:
console.log(friends.indexOf("Steven"));

//to check if el is in the array or not
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
