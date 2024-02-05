"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
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

// set is a collection of a unique values, set can't have any duplicates
// Set can hold mixed data types
// in Set() we have to pass iterable, so array, object or string
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet); //values that have duplicates will show only once

// set is also iterable
// is different than array bc elements inside are unique and their order is irrelevant, and there is no indexes

console.log(new Set("Jonas")); // {'J', 'o', 'n', 'a', 's'}
console.log(orderSet.size); // it's not length like in arrays

// to check if something is in set:
console.log(orderSet.has("Bread"));
console.log(orderSet.has("Pizza"));

// add new elements to a set:
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread"); // this one will not show, bc it's a duplicate

// delete elements:
orderSet.delete("Risotto");
console.log(orderSet);

// deleting all elements of the set:
// orderSet.clear();

// looping:
for (const order of orderSet) console.log(order);

// main use of sets is to remove duplicate values of arrays
// example:
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// to check for size, how many unique elements are there, without creating new array:
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

// how many different letters in a string:
console.log(new Set("sladjanadejanovic").size);
