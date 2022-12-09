"use strict";
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion of people and its capital city is ${capitalCity}.`;
}
const descSerbia = describeCountry("Serbia", 6.8, "Belgrade");
const descBrazil = describeCountry("Brazil", 214, "Brasilia");
const descKorea = describeCountry("South Korea", 51.74, "Seoul");
console.log(descSerbia, descBrazil, descKorea);
