'use strict';

// Map returnss new array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// convert from euros to usd
const eurToUsd = 1.1;

//callback func of map method takes as an argument current el of array
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

// even simpler with arrow function:
const movementsUSDarrow = movements.map(mov => mov * eurToUsd);

const movDescriptions = movements.map(
  (mov, i) =>
    `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movDescriptions);
