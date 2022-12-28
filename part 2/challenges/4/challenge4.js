"use strict";
/*
1.craete array "bills" containing all 10 test bill values
2. create empty arrays for tips and totals
3. use the calcTip function from before. use a for loop to perform those 10 calcultions

TEST DATAgit : 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

hint: call calcTip in the loop and use push method to add values to the tips and total arrays

bonus: write a function calcAverage which takes an array called "arr" as an argument. this func calculates the average of all numbers in the given array. call the func with "totals" array

*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

//bonus:

// function calcAverage(arr){}
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));

console.log(calcAverage(totals));
console.log(calcAverage(tips));
