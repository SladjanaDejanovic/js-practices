"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  // we can compute property names
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

  /////  ES6 ENHANCED OBJECT LITERAL
  openingHours,

  // we don't have to create it a property and then set it to func expression...
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //
  // },

  //... we can write it like this:
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

// restaurant is object literal bc we wrote it literally inside the code, using {}

//if we have an object that we wanna add inside another object - to be another parameter inside that object- and both  this object that we wanna add in and a parameter have the SAME NAME, we don't have to write it like this openingHours = openingHours, ,we can just type like this openingHours,
