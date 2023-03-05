'use strict';
// it MUTATES the original array
// sorts elements based on strings by default (convert everything ins tring then sorts it)

// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // sorts the elements alphabeticaly
console.log(owners);

// numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort()); // doesn't sort as we expect

// so we have to fix this by passong in compare callback func into sort method:
// movements.sort((a, b) => {
//   // (a, b) current value and next value
//   // ascending order
//   if (a > b) return 1; // return < 0, A before B (keep order)
//   if (a < b) return -1; // return > 0, B before A (sitch order)
// });
// console.log(movements);

// if a > b then a-b will be something positive, and if a<b then a-b will be negative,so we can improve our code like this:
movements.sort((a, b) => a - b);
console.log(movements);

// descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
