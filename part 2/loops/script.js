"use strict";

//for loop keeps running while condition is TRUE

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

//for (let variable name = from what number is starting; condition, in this case rep<=10, meaning that loop will be running while this is true; rep ++ means increasing by one after every step){action that will be executed for this loop}

//traditional counter variable name is i

const slady = [
  "Sladjana",
  "Dejanovic",
  2022 - 1994,
  "frontend dev",
  ["Yuri", "Kris", "Marija", "Marijana"],
  false,
];

const types = []; //create new array which will contain all the types for all these elements

//to log every el of this array:
for (let i = 0; i < slady.length; i++) {
  //here starting with 0 bc array is zero based, condition is to work up until how many el are in the array
  console.log(slady[i], typeof slady[i]); //reading from slady array

  //filling types array
  // types[i] = typeof slady[i];
  types.push(typeof slady[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
// console.log(ages);

// CONTINUE AND BREAK //
//Continue is to exit the current iteration of the loop and continue to the next one. Break is used to completely terminate the whole loop.

//let's say that we only wanted to print elements to the array that are strings (so if the element is not a string (!==) then skip it and go to next one)
for (let i = 0; i < slady.length; i++) {
  if (typeof slady[i] !== "string") continue;
  console.log(slady[i], typeof slady[i]);
}

//log no other elements after we found a number:
for (let i = 0; i < slady.length; i++) {
  if (typeof slady[i] === "number") break;
  console.log(slady[i], typeof slady[i]);
}
