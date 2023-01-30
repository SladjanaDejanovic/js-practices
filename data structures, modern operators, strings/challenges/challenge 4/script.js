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
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Hint 1: Remember which character defines a new line in the text area (/n)
Hint 2: The solution only needs to work for a variable made out of 2 words, like a_b
hint 3: Start without wottying about ✅. Tackle that only after you have variable name conversion working

Afterwards, test with your own data
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  //my try:
  // const cammelCase = [];
  // for (let i = 0; i < rows.length; i++) {
  //   const lower = rows[i].toLowerCase();
  //   const split = lower.split("_");
  //   const first = split[0];
  //   const second = split[1];
  //   const secondUpper = second.toUpperCase();
  //   const secondCapital = secondUpper[0] + secondUpper.slice(1).toLowerCase();
  //   cammelCase.push(first);
  //   cammelCase.push(secondCapital);
  //   console.log(cammelCase);
  //   cammelCase.join("");
  // }

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // console.log(output.padEnd(20)); // if we wanna add empty spaces, we can just put the number for how long we want the string, and it will add spaces at the end

    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
