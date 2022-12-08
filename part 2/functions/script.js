"use strict";

/////// STRICT MODE

//writing more secure code using strict mode:
//it has to be first line of code, otherwise it won't work
// - forbids us to do certain things
// - creates visible errors in certain situations (without strict mode js would just fail silently without us noticing)

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");
*/

//it reserves certain words for features that might be added later so we can't use them as variables(same like how we can't use "if" for the name of variable):
//const interface = "Audio";
//const private = 234;

///////  FUNCTIONS
// - piece of code that we can reuse, contains several lines of code, can recieve data and return data back
// function functionName(parameters, they are like variables that are speciffic only to this function, they will get defined once we called this function){code to execute}

// function logger() {
//   console.log("My name is Slady");
// }

// logger(); //  --  invoking/calling/running the function

function fruitProcessor(apples, oranges) {
  //these parameters represent the input data of this function
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // this will be the result of executing this function
}

//running the function: (in parenteces we're specifying actual values for parameters apples and oranges ---> arguments)
fruitProcessor(5, 0);

//if we want to use that value that was returned (in this case juice), we need to store it in a variable:
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//******** * keep your code DRY = Don't Repeat Yourself **********////////
