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

console.log("------ OR ------");

//////  OR operator can use any data type, can return any data type and they do short-circuiting

// if the first value is the truthy value it will immediately returns that value
console.log(3 || "Slady");
console.log("" || "Slady");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// practical example
restaurant.numGuests = 23; // if this number is 0, than it will show default, bc 0 is falsy value

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // to check if numGuests exists, if not default value is 10...
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // ... or easier way is with short-circuiting
console.log(guests2);

console.log("------ AND ------");

// /// AND works in opposite way of OR, it short-circuits when the first operant is falsy

console.log(0 && "Slady"); // it returns falsy value, without even evaluatung the second operant

console.log(7 && "Slady"); // if first operant is truthy that means that evaluation continues

console.log("Hello" && 23 && null && "Slady");

// practical example
// when we wanna check if a certain property or a value actually exists
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "cheese"); // if orderPizza exists then call that function

/// The nullish coalescing operator (??) ///////

// this works with principle of nullish values, which are : null and undefiend, NOT including 0 or " " (it sees 0 nad " " as truthy values)
console.log("---- ?? -----");

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
