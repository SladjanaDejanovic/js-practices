'use strict';
/*
Convert dog ages to human ages and calculate the average age of the dogs

Create a func "calcAverageHumanAge", which accepts an array of dog's ages ("ages") and does the following thing in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 yo, humanAge = 2 * dogAge. If the dog is > 2yo, humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 yo)

3. Calculate the average human age of all adult dogs 

4. Run the func for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
  //different way for calculating
  // const average = adults.reduce((acc, age, i, arr)) => acc + age / arr.length, 0
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
