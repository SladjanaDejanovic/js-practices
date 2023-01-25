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

// Map is a data structure that we can use to map values to keys
// data in maps is stored in key-value pairs
// keys can be ANY types

// easiest way to create a map is to make it empty and then...
const rest = new Map();

// ... fill it up with set method, passing in pair of key and a value
rest.set("name", "Classico Italiano");
rest.set(1, "Florence, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);

// set method returns updated map, which allows us to chain the set method:
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

// getting value with key:
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
// console.log(rest);

// rest.set([1, 2], "Test");
// console.log(rest);
// console.log(rest.get([1, 2])); //this will not work, bc this two arrays are not the same. the key is exactly that array in memory. so even when we write the correct "name" of the key, we won't get the value. to correct this, we store array in variable:
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

// another method of populating map, without set()
// creating array of arrays, which will contain key-value pairs
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);
console.log(question);
// this looks the same like what we'd get with Object.entrie(), we'll get arrat of arrays

// Converting object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Looping
// example
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);
console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);

console.log(question.entries());
console.log(question.keys());
console.log(question.values());
