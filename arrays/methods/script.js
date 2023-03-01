'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

//// // Slice method ///

// it returns new array, doesn't change original array
console.log(arr.slice(2)); // specifying starting position from whihc we are slicing
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
