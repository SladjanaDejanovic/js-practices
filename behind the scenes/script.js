"use strict";

/// Scope   ///////////////
/*
// const and let are block scoped - only available inside {}, inside the block in which they were created
//var are function scoped(but is not good practise to use var)
// functions are block scoped

function calcAge(birthYear) {
  const age = 2022 - birthYear; //the age variable is accessible in the calcAge function where it was defined, and then also in all the child scopes, but is not accessible outside of the calcAge scope
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Bunny"; // this is a new var, and has nothing to do with const firstName = "Slady", bc it was declared here, they just have same names. bc this is in same scope as str, then this const will be used for firstName, js won't perform any scope look up for a variable, bc it's already in the same scope
      //outside this block the firstName variable will still be the one coming from a scope chain (in this case that's "Slady")
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = "NEW OUTPUT!"; // we manipulated an existing variable inside a child scope...
    }
    //console.log(str); // this won't work
    console.log(millenial);
    // console.log(add(2, 3)); // this won't work, bc it's outside its block/scope
    console.log(output); // ... so this is working
  }
  printAge();

  return age;
}

//So only an inner scope can have access to the variables of its outer scope, but not the other way around.

const firstName = "Slady";
calcAge(1994);
// console.log(age); // we are outside of the scope of age variable, so we can't access it
// printAge(); //this too
*/

/// this Keyword   //////////

// console.log(this); //window, global scope

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // it will be undefiend
};

calcAge(1994);

const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this); // it will be window, bc arrow func doesn't get it's own this keyword, so it uses this keyword from its parent function/scope
};
calcAgeArrow(1994);

const slady = {
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
slady.calcAge();

// when we have method call, this keyword inside of the method will be the object that is calling the method(in this case slady object)
// this keyword will point to the object that is calling the method, not the method where we wrote this keyword

/// Method borrowing  /////////
const yuri = {
  year: 1999,
};

// function is just a value, so we can do this:
yuri.calcAge = slady.calcAge;

yuri.calcAge(); // this keyword now points to yuri (this keyword written in calcAge func in slady object)
