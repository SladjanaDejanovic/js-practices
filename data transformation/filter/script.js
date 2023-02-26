'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0; //boolean
});
console.log(deposits);

//same result with using for of loop, but filetr is more functional, shorter code

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0); // with arrow func is even shorter/faster
console.log(withdrawals);

// filter method also gets access to current index and whole array filter(function(mov, i, arr){})
