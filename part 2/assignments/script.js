"use strict";
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion of people and its capital city is ${capitalCity}.`;
}
const descSerbia = describeCountry("Serbia", 6.8, "Belgrade");
const descBrazil = describeCountry("Brazil", 214, "Brasilia");
const descKorea = describeCountry("South Korea", 51.74, "Seoul");
console.log(descSerbia, descBrazil, descKorea);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const serbia = percentageOfWorld1(6.8);
const brazil = percentageOfWorld1(214);
const southKorea = percentageOfWorld1(51.7);

console.log(serbia, brazil, southKorea);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const serbia2 = percentageOfWorld2(6.8);
console.log(serbia2);
