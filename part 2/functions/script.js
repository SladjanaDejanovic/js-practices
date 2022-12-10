"use strict";

///////     STRICT MODE       /////////////

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

///////      FUNCTIONS       ////////////
// - piece of code that we can reuse, contains several lines of code, can recieve data and return data back
// function functionName(parameters, they are like variables that are speciffic only to this function, they will get defined once we called this function){code to execute}

// function logger() {
//   console.log("My name is Slady");
// }

// logger(); //  --->  invoking/calling/running the function

function fruitProcessor(apples, oranges) {
  //these parameters represent the input data of this function
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // this will be the result of executing this function
}

//running the function: (in parenteces we're specifying actual values for parameters apples and oranges ---> arguments)
fruitProcessor(5, 0);

//if we want to use that value that was returned (in this case juice), we need to store it in a variable:
const appleJuice = fruitProcessor(5, 0);
//console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
//console.log(appleOrangeJuice);

//******** * keep your code DRY = Don't Repeat Yourself **********////////

/////      DECLARATION VS EXPRESSION  ///////////////

///       FUNCTION DECLARATION
function calcAge1(birthYear) {
  const age = 2037 - birthYear; // we calculate the age first
  return age; //and then return the value, we take it out of the function using "return " keyword, so we can use it later
}

//could be simplified, if all we want to do is to return this value, we don't need to store it in a variable:

function calcAge2(birthYear) {
  //we're using birth year that we gonna recieve and we use that to calculate the age
  //birthYear is an input
  return 2037 - birthYear;
}

const age2 = calcAge2(1994);

//the parameter is kind of placeholder in the function (birthYear) and the argument is then the actual value that we use to fill in that placeholder that is the parameter (1994).

////     FUNCTION EXPRESSION

// storing function in a variable (without giving a aname to function, this is annonymous function) and then that variable will be the function:
const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};

// expression produces value (this is expression:    function (birthYear) {return 2037 - birthYear;}   ), so weasign this value to this variable. this variable will hold function value basically

const age3 = calcAge3(1994);
console.log(age2, age3);

//// we can call function declarationS BEFORE THEY ARE DEFINED IN A CODE. This isn't working with expressions

//////  ARROW FUNCTIONS //////////
//storing the value of arrow function in variable
const calcAge4 = (birthYear) => 2037 - birthYear;

//simple way of writing one line functions, withouth curly braces, and not using return bc it implicit
const age4 = calcAge4(1994);
console.log(age4);

//for bigger code we need {} and return, and arrow functions don't get "this" keyword
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1994, "Slady"));
console.log(yearsUntilRetirement(1999, "Yuri"));
