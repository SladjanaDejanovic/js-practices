"use strict";

/*
in arrays, there is no way of giving elements a name. And so we can't reference them by name, but only by their order number in which they appear in the array.

For this we use another data structure: OBJECTS
in objects we define key value pairs
so then we can give each of these values here a name.
key is variable name    key: value

order of elements in object doesn't matter at all
*/

//the easiest way of creating objects is with this {}, and it's called object literal syntax

// const slady = {
//   firstName: "Sladjana",
//   lastName: "Dejanovic",
//   age: 2022 - 1994,
//   job: "frontend dev",
//   friends: ["Yuri", "Kris", "Marija", "Marijana"],
// };

//////// DOT vs BRACKET NOTATION
//console.log(slady);

//getting a property from an object by dot notaion (using final name of a value):
//console.log(slady.lastName);

//or with brackets (in [] can go any expression, so we can use computed propery values too):
//console.log(slady["lastName"]);

const nameKey = "Name";
//console.log(slady["first" + nameKey]);
//console.log(slady["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Slady? Choose among firstName, lastName, age, job, and friends"
// );

// if (slady[interestedIn]) {
//   console.log(slady[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose among firstName, lastName, age, job, and friends"
//   );
// }

////adding properties to the object:
//slady.location = "Serbia";
//slady["instagram"] = "waywardcherrypie";
//console.log(slady);

//challenge: "Sladjana has 4 friends, and her best friend is called Yuri"
// console.log(
//   `${slady.firstName} has ${slady.friends.length} friends, and her best friend is called ${slady.friends[0]}.`
// );

////// OBJECT METHODS //////

const slady = {
  firstName: "Sladjana",
  lastName: "Dejanovic",
  birthYear: 1994,
  job: "frontend dev",
  friends: ["Yuri", "Kris", "Marija", "Marijana"],
  hasDriversLicense: false,

  calcAge: function (birthYear) {
    return 2022 - birthYear;
  }, // every function that is attached to an object is called method
};
console.log(slady.calcAge(1994));
