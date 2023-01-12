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
};

restaurant.orderDelivery({
  // we only passed one object into this func, it's one argument
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});
// we have to put exact property names, but order doesn't matter, bc it's in the object:
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if we wanna give new names to the properties:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values for trying to read a property tahta doesn't exist in an object:
const { menu = [], starterMenu: starters = [] } = restaurant; // empty array as a default for non-existing properties in object
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// {a,b} = obj;// syntax error: bc when we start a line with {} js expects a code block
({ a, b } = obj);
console.log(a, b);

// Nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
