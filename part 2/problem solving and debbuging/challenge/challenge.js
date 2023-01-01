"use strict";

/*
Given an array of forecasted maximum temps, the thermometer displays a string with these temps

example: [17, 21, 23] will print "... 17°C in 1 day ... 21°C in 2 days ... 23°C in 3 days..."

Create a func "printForecast" which takes in an array "arr" and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it into sub-rpoblems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4] 
*/

// i missunderstood the task completely :) so this bellow doesn't work at all
//func with loop that goes over every value in array and prints the certain string?
// //should i just start a normal loop? and for the day number just add 1 to index of a value in array?
// const t1 = [17, 21, 23];
// const printForecast = function (arr) {
//   for (let i = 0; i < t1.length; i++) {
//     let str = "";
//     return (str = `${t1[i]}°C in ${i+1} days`);
//   }
// };
// printForecast(t1);
// console.log(str);

//SOLUTION:
//understandig problem:
// -array transformed to string separated by ...
// - what is the x days? answer is index + 1

//breking up into sub-problems:
// - transform array into string
// - transform each element to string with °C
// - string needs to contain day (index+1)
// - add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("... " + str);
};

printForecast(data1);
printForecast(data2);
