"use strict";
/*
1.craete array "bills" containing all 10 test values
2. create empty arrays for tips and totals
3. use the calcTip function from before. use a for loop to perform the 10 calcultions

test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

hint: call calcTip in the loop and use push method to add values to the tips and total arrays

bonus: write a function calcAverage which takes an arra called "arr" as an argument. this func calculates the averageof all numbers in the given array



*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bill) {
  return (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.lenght; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
}

console.log(tips[i]);
