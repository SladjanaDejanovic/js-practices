"use strict";
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion of people and its capital city is ${capitalCity}.`;
}
const descSerbia = describeCountry("Serbia", 6.8, "Belgrade");
const descBrazil = describeCountry("Brazil", 214, "Brasilia");
const descKorea = describeCountry("South Korea", 51.74, "Seoul");
//console.log(descSerbia, descBrazil, descKorea);

///////////////

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const serbia = percentageOfWorld1(6.8);
const brazil = percentageOfWorld1(214);
const southKorea = percentageOfWorld1(51.7);

//console.log(serbia, brazil, southKorea);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const serbia2 = percentageOfWorld2(6.8);
//console.log(serbia2);

///////////////

const percentageOfWorld3 = (population) => (population / 7900) * 100;
//console.log(percentageOfWorld3(214));

////////////////

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} milion people, which is ${percentage}% of the world.`;
  //console.log(description);
}

describePopulation("Serbia", 6.8);
describePopulation("Brazil", 214);
describePopulation("South Korea", 51.74);

/////////// ARRAYS /////////////
const populations = [6.8, 214, 51.74, 100];
console.log(populations.lenght === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

///// array methods ////

const neighbours = [
  "Hungary",
  "Romania",
  "Bulgaria",
  "North Macedonia",
  "Albania",
  "Montenegro",
  "Bosnia and Herzegovina",
  "Croatia",
];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

//how i did it:
// if (neighbours.includes("Germany") === false) {
//   console.log("Probably not a central Europian country :)");
// }

// const bih = neighbours.indexOf("Bosnia and Herzegovina");
// neighbours[bih] = "B&H";
// console.log(neighbours);

//solution from course:
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central Europian country :)");
}

neighbours[neighbours.indexOf("Bosnia and Herzegovina")] = "B&H";
console.log(neighbours);