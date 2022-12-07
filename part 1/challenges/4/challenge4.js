/*
usual tip is 15% if the bill is between 50 and 300, if the value is different tip is 20%

1.calculate the tip depending on the bill value. create variable called tip. use ternary operetor, not if else statemenet


2.print a string to console containing the bill value, the tip, and the final value (bill+tip). example "the bill was 275, the tip was 41.25, and the total value 316.25"


test data: for bill values 275, 40 and 430

*/
// const bill = 275;
// const bill = 40;
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
//bill*(15/100) or bill*(20/100) ----> % could be calculated like this, but i used my way
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
