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
// console.log(populations.lenght === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
// console.log(percentages);

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
// console.log(neighbours);
neighbours.pop();
// console.log(neighbours);

//how i did it:
// if (neighbours.includes("Germany") === false) {
//   console.log("Probably not a central Europian country :)");
// }

// const bih = neighbours.indexOf("Bosnia and Herzegovina");
// neighbours[bih] = "B&H";
// console.log(neighbours);

//solution from course:
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central Europian country :)");
// }

neighbours[neighbours.indexOf("Bosnia and Herzegovina")] = "B&H";
// console.log(neighbours);

/////////// OBJECTS //////////////

const myCountry = {
  country: "Serbia",
  capital: "Belgrade",
  language: "serbian",
  population: 6,
  neighbours: [
    "Hungary",
    "Romania",
    "Bulgaria",
    "North Macedonia",
    "Albania",
    "Montenegro",
    "Bosnia and Herzegovina",
    "Croatia",
  ],
  describe: function () {
    return `${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsIsland: function () {
    return (this.isIsland = this.neighbours.lenght === 0 ? true : false);
  },
};
// console.log(myCountry.describe());

// console.log(myCountry.checkIsIsland());

// console.log(
//   `${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

myCountry.population += 2;
// console.log(myCountry.population);

myCountry["population"] -= 2;
// console.log(myCountry.population);

////////////  LOOPS //////////

//// for loop

// for (let vote = 1; vote <= 50; vote++) {
//   console.log(`Voter number ${vote} is currently voting.`);
// }

/// looping arrays, continue and break

const populations2 = [6.8, 214, 51.74, 100];
const percentages2 = [];
// for (let i = 0; i < populations2.length; i++) {
//   percentages2.push(percentageOfWorld1(populations2[i]));
// }

for (let i = 0; i < populations2.length; i++) {
  const perc = percentageOfWorld1(populations2[i]);
  percentages2.push(perc);
}

// for (let i = 0; i < populations2.length; i++) {
//   const perc = percentageOfWorld1(populations2[i]);
//   percentages2.push(perc);
// }

// console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// while loop

const percentages3 = [];
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
