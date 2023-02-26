'use strict';

// returns one value, not an array
// first parameter (in callback func) is accumulator - it keeps accumulating values that we want to return in the end (while looping over array at each iteration it will add current element to accumulator, basically adding everything up)
// other parameter is initial value of acc in the first  loop iteration

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

//with arrow func
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//with for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
