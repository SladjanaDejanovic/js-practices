"use strict";

//////////////////////
/// Scope   ///////////////
/*
// const and let are block scoped - only available inside the block {} in which they were created
// var are function scoped(but is not good practice to use var)
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

//... So only an inner scope can have access to the variables of its outer scope, but not the other way around.

const firstName = "Slady";
calcAge(1994);
// console.log(age); // we are outside of the scope of age variable, so we can't access it
// printAge(); //this too
*/

/// this Keyword   //////////
/*
console.log(this); //window, global scope

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

// this keyword inside of the method will be the object that is calling the method(in this case slady object)
// this keyword will point to the object that is calling the method, not the method where we wrote this keyword

/// Method borrowing  /////////
const yuri = {
  year: 1999,
};

// function is just a value, so we can do this:
yuri.calcAge = slady.calcAge;

yuri.calcAge(); // this keyword now points to yuri (this keyword written in calcAge func in slady object)
*/

/*
const slady = {
  // this is not a block scope, it's just an object literal, how we define objects
  firstName: "Sladjana",
  year: 1994,
  calcAge: function () {
    console.log(2023 - this.year);

    // regular function call has the this keyword set to undefined
    // There are two solutions to this problem - use an extra variable that we usually call self outside of the function, and then we set that to this.  And so then through the scope chain, self will be equal to this. And so JS goes up the scope chain, into the parent scope, which is calcAge. So here is where self is defined, and it is defined as this

    // const self = this;
    // const isMillenial = function () {
    //   // console.log(this);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial(); // bc this is a regular function call (not an arrow function), this kw in it is undefiend, so we get an error when calling it

    // Second, more modern solution is to use arrow function
    // bc arrow function doesn't have its own this kw, so it will look up for parent's this kw, in this case it's in calcAge
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); //arrow func doesn't have theirs this keyword, it wil take this kw from it's parent, but object is in global scope, so this will be undefiend
  },
};
slady.greet();
slady.calcAge();

////// Arguments keyword //////

// functions also get access to an arguments keyword. Just like the this keyword, the arguments keyword is only available in regular functions

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

// this can be useful when we need a function to accept more parameters than we actually specified. it is completely legal to add more arguments. They will not have a name, so we didn't name them, but they exist. And we can see them here in the arguments array
addExpr(2, 5, 8, 12);

//arrow func doesn't have access to arguments kw
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

////////////////////////
// Primitives vs. Objects (Primitive vs. Reference Types) //////

/*
// primitives: number, string, boolean, undefiend, null, symbol, bigint (primitive types)
// objects: object literal, array, function ... (reference types)

//primitives are stores in call stack, and variable will actually point to address in call stack where the value is stored. and this kind of value can't be changed (that's why we use let instead of const). let's say let age points to address 0001 where is value 30. the we say that oldAge is equal to age, which means that oldAge will point to same address, with a value of 30. then when we say that age is now equal to 31, that creates new address with a new value of 31

let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); // 30

// objects are stored in memory heap, which works like this: const me has address in call stack 0003, that holds a value of a reference of an memory address in heap, where is the actual value of the object (address 0003 with value D30F, D30F in heap holds {name: "Slady", age: 28}. when we say that friend = me, now friend points to the same address as me, which is 0003, referencing it's value in heap. so when we say that friend.age = 25, we are changing that in the object, which is the object that 0003 address is eventually leading to
// that's why it is not a problem to use const when making objects, we can still change its value

const me = {
  name: "Slady",
  age: 28,
};
const friend = me;
friend.age = 25;

console.log("Friend:", friend);
console.log("Me:", me);

// so when we think that we are copying the object (friend = me), we are actually creating a new variable that is pointing to the exact same object
*/

/// practising:
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// both of these two variables (jessica nad marriedJessica) simply point to exactly the same memory address in the heap. And that's because in the stack, they both hold the same memory address reference. And so of course, it makes sense that if we change a property on marriedJessica, it will also change on Jessica itself.
// const is not the problem here, bc the only thing it has to be constant is the value in stack, which we are not actually changing. The only thing that we are changing is the underlying object that is stored in the heap.
// we can't change the value to the new memory address ( marriedJessica = {}), if it's not let

// Copying the object, and changing one without affecting the other:

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2); // calling this function, which will create a new object with all properies copied
// this is a shallow copy, meaning it only copies on first level, while deep clone would copy everything

jessicaCopy.lastName = "Davis";
// console.log("Before marriage:", jessica2);
// console.log("After marriage:", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John"); // we are now manipalitng object whitin the object (array that is inside an object literal)

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
// now both of them has an array of 4 members
