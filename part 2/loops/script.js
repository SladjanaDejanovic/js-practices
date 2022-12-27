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
  // console.log(slady[i], typeof slady[i]); //reading from slady array

  //filling types array
  // types[i] = typeof slady[i];
  types.push(typeof slady[i]);
}

// console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
// console.log(ages);

// CONTINUE AND BREAK //
//Continue is to exit the current iteration of the loop and continue to the next one. Break is used to completely terminate the whole loop.

//let's say that we only wanted to print elements to the array that are strings (so if the element is not a string (!==) then skip it and go to next one)
// for (let i = 0; i < slady.length; i++) {
//   if (typeof slady[i] !== "string") continue;
//   console.log(slady[i], typeof slady[i]);
// }

//log no other elements after we found a number:
// for (let i = 0; i < slady.length; i++) {
//   if (typeof slady[i] === "number") break;
//   console.log(slady[i], typeof slady[i]);
// }

///// LOOPING BACKWARDS AND LOOPS IN LOOPS /////

// for (let i = slady.length - 1; i >= 0; i--) {
//   console.log(i, slady[i]); //first counter(i), then array value (slady[i])
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋🏽‍♀️`);
//   }
// }

/////// WHILE LOOP //////////
//specifying only a condition, doesn't need a counter (number that is increasing), only a condition to remain true so it can keep running
// console.log("-------while loop");
let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

//rolling a dice until we get 6:
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
