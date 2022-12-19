"use strict";
/*
tip 15% of the bill if the bill is between 50 and 300, and if the value is different tip is 20%

1. write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above. test the function using a bill value 100.

2. create an array 'bills' containg the test data bellow

3. create array 'tips' with tip value for each bill, calculated for a func you created before

4.BONUS: create array 'total' with the total values, so bill + tip

test data: 125, 55, 44
*/
//tried this, didn't work
// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     bill * (15 / 100);
//   } else {
//     bill * (20 / 100);
//   }
// }

//solution from course:
const calcTip = function (bill) {
  return (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 55, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
