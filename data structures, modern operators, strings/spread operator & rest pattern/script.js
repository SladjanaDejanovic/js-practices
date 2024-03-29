"use strict";
/*
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
*/

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //this will create an array
  },

  // when func has too many parameters, so it's hard for us to remember their order, we can simply put an object as an argument of this func, and then the func will immediately destructure that object
  orderDelivery: function ({
    starterIndex = 1, //
    mainIndex = 0, //
    time = "20:00", // setting default values
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (
    mainIngredient,
    ...otherIngredients // has to have at least one ingredient, and others are optional
  ) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//// Spread operator ////////////
// expand an array into all its elements

const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // bad way of adding elements at the beginning of the array
// console.log(badNewArr);

const newArr = [1, 2, ...arr]; // spread operator is taking all the values from arr array and then write them individualy
console.log(newArr); // this is now new array

console.log(...newArr); // and this is elements of that array individualy

// creating new array that has same elements as existing array and adding one new element to that new array:
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// difference between destructuring array and spread operator - with destructuring we create new variables, spread operator we can only use it in places where we would otherwise write values separated by commas (only when building an array or when we pass values into a function)

// Coppy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// Join arrays
const entireMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(entireMenu);

//// Iterables: arrays, strings, maps, sets. NOT objects ////

const str = "Slady";
//creating array with all individual letters of this string:
const letters = [...str, "", "D."];
console.log(letters);
console.log(...str);

// Real world example
const ingredients = [
  //
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects (spread operator work with objects too, even tho they are not iterables)
const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
  founder: "Guiseppe",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

///// Rest pattern and parameters

// syntax is the same, but it's used for collecting values and putting them in array, oposite of spread operator

const arr1 = [1, 2, ...[3, 4]]; // SPREAD, bc of the RIGHT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST, bc of the LEFT side of =
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // this otherFood only includes elements after last variable, doesn't include any skipped elements, that's why the rest pattern should always be the last in destructuring assignment, and there can be only one rest in destructuring assignment

// objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions
// Rest parameters

const add = function (...numbers) {
  // taking multiple numbers and then packs them into one array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "cheese", "olives", "eggs");
restaurant.orderPizza("mushrooms");

/// we use REST when we have to write multiple variables separated by commas
// SPREAD - when we have to use several values separated by commas
