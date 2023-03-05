'use strict';
// when we have data, we create arrays manually
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// but we can generate arrays programmatically
const x = new Array(7); // creates new array with 7 empty spaces, creates array with length 7
console.log(x);

////// fill   //////////
// only method we can call on this kind of array is fill(), we pass in a value and then it fills array with that (in this case array x will be [1,1,1,1,1,1,1])
// mutates original array
// x.fill(1);
// console.log(x);

// we can also specify where we want to start o fill
x.fill(1, 3, 5); // second parameter is position, 3rd is ned parameter (just like in slice)
console.log(x);

// we can use fill() on other arrays, doesn't have to be empty array
arr.fill(23, 2, 6);
console.log(arr);

/////    Array.from() /////
// using .from() on array constructor
const y = Array.from({ length: 7 }, () => 1); // specifying length and then callback function (on every iteration it wil put 1)
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); //callback func has 2 parameters, of which index is always second, we don't need this first parameter(current element) so we can put undescore (_) as a throwaeay parameter
console.log(z);

// if we wanna use array methods on node list (we get node list when we use querySelectorAll, it's not a real array) we first have to convert it into array

document
  .querySelector('.balance__value')
  .addEventListener('click', function () {
    const movementUI = Array.from(
      document.querySelectorAll('.movements__value'), // as a second parameter we're including mapping function to convert it into text content, making it into a number and to remove €
      el => Number(el.textContent.replace('€', ''))
    );
    console.log(movementUI);
  });
