"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  //if we need current index [index, value at that position]
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`); //Math.abs() removes -, gives only absolute value of number
  }
}

console.log("------- FOREACH ----------");

////  doing this with forEach():
// loops over array and at each iteration it calls a func we defined, it will pass the current element as the argument in this function

movements.forEach(function (mov, i, arr) {
  //first parameter always has to be current element, second is index, and then the entire array we're looping
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`);
  }
});

// continue and break statements doesn't work in forEach loop, forEach will always loop over entire array, we can't break out from it

/// forEach with maps

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//// forEach with sets

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  //(value, _, map) _ is throwaway variable, isn't necessary
  console.log(`${key}: ${value}`); // key here is same as value, bc set doesn't have keys or indexes
});
