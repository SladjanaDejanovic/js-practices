'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

//// // Slice method ///

// it returns new array, doesn't change original array
console.log(arr.slice(2)); // specifying starting position from which we are slicing
// we can define end parameter too (which won't be included in the output, length is end parameter minus begining):
console.log(arr.slice(2, 4));

// define negative parameter and then it will start to slice (to copy basically) from the end of the array
console.log(arr.slice(-2)); // this will take last 2 elements of the array
console.log(arr.slice(1, -2));

// we can use slice method to make shallow copy of the array
console.log(arr.slice());

//// Splice method //////////
// it DOES change the original array

// console.log(arr.splice(2));
// console.log(arr);

// mostly used to delete elements from array, for example to remove last element
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // starting from position 1, number of elements we want to delete
console.log(arr);

////// Reverse ///////////
// changes original array

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

////// Concat ///////////
// doesn't change original

const letters = arr.concat(arr2);
console.log(letters);
//same result as:
console.log([...arr, ...arr2]);

//// Join ////////
console.log(letters.join(' - '));

///// at method (also works on strings) //////

const arr3 = [23, 11, 64];
console.log(arr3.at(0));
//same as:
// console.log(arr3[0]);

// getting last element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

/////  pipeline (chaining methods)

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => {
  //if there is a bug, we can check it with console.log by accessing arr that method has access to as a third parameter
  // console.log(arr);
  // return mov * eurToUsd;
  // with no debuging :
  .map(mov => mov * eurToUsd)
  // })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

//////  Find  ///////

// retrieve one element of the array bassed on a condition
// unlike filter that returns new array, find() will return the first element that satisfies the condition
const firstWithdrawl = movements.find(mov => mov < 0);
console.log(firstWithdrawl);

// useful to find certain object in array:
const account1 = {
  owner: 'Jonas Shmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -450],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

////    findIndex   ////////////
// to delete element from array with splice() we need index from where we wanna remove it
// it has callback function too
// difference with indexOf() is that with indexOf we can only search elements that are int he array. with findIndex we can have conditions like below
// const index = accounts.findIndex(
//   acc => acc.username === currentAccount.username
// );

////    some  //////////////
// different than includes(), bc here we can check for condition, and it returns boolean
console.log(movements);
console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

///// every  //////////
// returns only if all elements in the array satisfy the condition (is a boolean)
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback (better for DRy principle)
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

////// flat ///////////
// when array consists of arrays, and we want to put all elements of all subarrays into one array we use flat() (it removes nested arrays and flatens the array)
// only goes one level deep as a default (flat(1))
const array = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array.flat());

const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // has a depth parameter

// to take arrays from objects:
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements); // we got array of arrays

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// better with chaining:
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

///////      flatMap  /////////////////
// flat() then  map() is very common to do, so there is flatMap() for better performance
// it recieves same callback as map()
// it goes only 1 level deep and we can't change it
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
