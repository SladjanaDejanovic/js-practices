"use strict";

let arr = ["a", "b", "c", "d", "e"];

////  Slice method ///

// it returns new array, doesn't change original array
console.log(arr.slice(2)); // specifying starting position from whihc we are slicing
// we can define end parameter too (which won't be included in the output, length is end parameter minus begining):
console.log(arr.slice(2, 4));

// define negative parameter and then it will start to slice (to copy basically) from the end of the array
console.log(arr.slice(-2)); // this will take last 2 elements of the array
console.log(arr.slice(1, -2));

// we can use slice method to make shallow copy of the array
console.log(arr.slice());

//// Splice method
// it DOES change the original array

// console.log(arr.splice(2));
// console.log(arr);

// mostly used to delete elements from array, for example to remove last element
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // starting from position 1, number of elements we want to delete
console.log(arr);

////// Reverse
// changes original array

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

////// Concat
// doesn't change original

const letters = arr.concat(arr2);
console.log(letters);
//same result as:
console.log([...arr, ...arr2]);

//// Join
console.log(letters.join(" - "));

///// at method (also works on strings)

const arr3 = [23, 11, 64];
console.log(arr3.at(0));
//same as:
// console.log(arr3[0]);

// getting last element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
