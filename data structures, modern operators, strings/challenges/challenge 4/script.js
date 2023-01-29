"use strict";
/*
Write program that recieves a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a text area inserted into the DOM, and conversion will happen when button is pressed

THIS TEST DATA (pasted to textarea)
undersocre_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
UnderscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
CalculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Hint 1: Remember which character defines a new line in the text area (/n)
Hint 2: The solution only needs to work for a variable made out of 2 words, like a_b
hint 3: Start without wottying about ✅. Tackle that only after you have variable name conversion working

Afterwards, test with your own data


*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const text = document.querySelector("textarea").value;

// to lower case
// const bla = "BLA_bLA";
// const lowerBla = bla.toLowerCase();
// console.log(lowerBla);
// // remove _
// const together = lowerBla.split("_");
// console.log(together);
// const first = together[0];
// console.log(first);
//add capital letter on second
// const capital = together[1].toUpperCase();
// console.log(capital);
// const secondCapital = capital[0] + capital.slice(1).toLowerCase();
// console.log(secondCapital);
// const newArr = [];
// newArr.push(first);
// newArr.push(secondCapital);
// console.log(newArr);
// const all = newArr.join("");
// console.log(all);

const cammelCase = [];

const toCammelCase = function (text) {
  // const arr = strings.split("/n");
  const lower = text.toLowerCase();
  const split = lower.split("_");

  const first = split[0];
  const second = split[1];

  const secondUpper = second.toUpperCase();
  const secondCapital = secondUpper[0] + secondUpper.slice(1).toLowerCase();

  cammelCase.push(first);
  cammelCase.push(secondCapital);

  return console.log(cammelCase.join(""));
};
toCammelCase("undersocre_case");
