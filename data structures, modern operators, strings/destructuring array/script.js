"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //this will create an array
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

// destructuring is unpacking values from an array of an object into a separate values, breaking complex data structure into smaller data stractures, like a variable

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring we can do that in one go:
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//taking only two first values :
// const [first, second] = restaurant.categories;
// console.log(first, second);

// if we wanna take first and third, we leave a hole in destructuring operator:
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// when we wanna switch variables:
// - without desctructuring
// const temp = main;
// main = secondary;
// secondary = main;

// - create a new array with their possitions switched, and then destructure them:
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function (func created array, and then we destructured it)
// console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0); // this is where we take values from the array and put them separately
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// if we wanna individual values, we do destructuring inside destructuring:
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Setting default values for variables when we're destructing them (useful when we don't know the lenght of the array):
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
