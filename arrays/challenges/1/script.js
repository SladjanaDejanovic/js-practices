'use s';
'use strict';
/*
Julia and Kate re doing study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). They're interestsed in knowing whether a dog is an adult or a puppy, A dog is an adult if it's at least 3 years old, otherwise it's a puppy.

 Create a func "checkDogs" which accepts 2 arrays of dog's ages ("dogsJulia" and "dogsKate"), and does the following things:

 1. Julia found out that the owner of the first and last two dogs actually have cats, not dogs. So create a shallow copy of Julias's array, and remove the cat ages from that copied array (bc it's a bad practice to mutate function parametes)

 2. Create an array with both Julia's (corrected) and Kate's data

 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

 4. Run the func for both test datasets
 
 TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
 TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/
// Test data 1:
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// Test data 2:
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDog = function (arr1, arr2) {
  let correct = arr1.slice(1, 3);
  let allDogs = correct.concat(arr2);
  console.log(allDogs);

  allDogs.forEach(function (age, i) {
    const log =
      age > 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`;
    console.log(log);
  });
};

checkDog(dogsJulia, dogsKate);

//course solution : he used firs slice() to make a copy of array and then uses splice() to get elements needed, when loging to console he used if e;se
