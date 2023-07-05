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

// we wanna get opening hours for monday (and we don't know if monday even exist or even openingHours):
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); // we get nothing in console log

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // this exist so we get the value of it

// this is fixed with OPTIONAL CHAINING (?.), when the certain property doesn't exist it returns undefiend immediately
console.log(restaurant.openingHours.mon?.open);

// we can do multiple optional chaining:
console.log(restaurant.openingHours?.mon?.open);

// Real world example:

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// loop over array and log to console if restaurant open or close on each day:
for (const day of days) {
  console.log(day);
  // if we wanna use varaible name as property name we put it in []
  const open = restaurant.openingHours[day]?.open ?? "closed"; // set default value if it's undefiend with -  || "closed", but if the value of opening hours is 0, which is a falsy value, it will then log "closed", so we fix that by typing - ?? "closed" - instead

  console.log(`On ${day}, we open at ${open}`);
}

// Methods (checking if method exists before calling it):
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays (checking if it's empty)
const users = [{ name: "Slady", email: "hello@slady.com" }];
// const users = [];
console.log(users[0]?.name ?? "User array empty");
