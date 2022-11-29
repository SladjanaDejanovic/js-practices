let country = "Serbia";
const continent = "Europe";
// let population = 6.8;
// // console.log(country, continent, population);
// let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// MATH OPERATORS
const now = 2037;
const ageSlady = now - 1994;
const ageYuri = now - 1999;
const averageAge = (ageSlady + ageYuri) / 2;
// console.log(ageSlady, ageYuri, averageAge);

// const firstName = "Sladjana";
// const lastName = "Dejanovic";
// console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5; //x ce biti 15
x += 10; // na vrednost x (koja je 15 zbog ovog iznad) dodaje se 10
x *= 4; // vrednost x (koja je sad 25) mnozi se sa 4
x++; //x = x + 1
// console.log(x);

// COMPARISON OPERATORS
// console.log(ageSlady > ageYuri);
// console.log(ageYuri >= 30);

const isAge = ageYuri >= 30; //store this result if we need it later in code

// console.log(now - 1994 > now - 1999); //isto sto i ovo: console.log(ageSlady > ageYuri);, da ne mora da se racuna posebno (12, 13, 14 red), nego odmah ovde ovako

//STRINGS AND ...
const firstName = "Slady";
const job = "bookbinder";
const birthYear = 1994;
const year = 2030;

const slady =
  "I'm " + firstName + ", a " + (year - birthYear) + " yaers old " + job;
// console.log(slady);

//...TEMPLATE LITERALS
const sladyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(sladyNew);
//laksi nacin da se napise string. koristi se back tick, dugme iznad taba. variables se pisu ${ime var, ili func ili bilo sta}
// console.log(`String
// multiple
// lines`); //creating multi line string (enter...logicno)

//(asignment)
let population = 6.8;
// console.log(population / 2);
// population++;
// console.log(population);
let finland = 6;
// console.log(population > finland);
let averagePopulation = 33;
// console.log(averagePopulation > population);
language = "serbian";
// let description =
//   country +
//   " is in " +
//   continent +
//   ", and it's " +
//   population +
//   " people speak " +
//   language +
//   ".";

let description = `${country} is in ${continent}, and it's ${population} people speak ${language}.`;
// console.log(description);

if (population > averagePopulation) {
  //console.log("Serbia population is above average.");
} else {
  //console.log("Serbia population is bellow avarage");
}

//IF / ELSE STATEMNTS (if/else control structure)
var age = 15;

if (age >= 18) {
  // console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  // console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

//TYPE CONVERSION
const inputYear = "1994";
//console.log(Number(inputYear)); //this would give converted version, from string to number, but the original will still remain in a form of a string
//console.log(inputYear + 18); //that's why this isnt working still
//console.log(Number(inputYear) + 18);
//console.log(String(23));
//TYPE COERCION
//console.log("i am " + 28 + " years old"); //whenever an operatior is dealing with 2 values that have different types. js will then behind the scenes convert one of the values to match the other value. plus will make numbers into string
//console.log("23" - "10" - 3); //minus operator trigers opposite conversion, making strings into numbers

let n = "1" + 1; //"11" - sve pretvara u string
n = n - 1; // a onda jer se koristi minus to n pretvara u broj
//console.log(n); //tako da n ispadne 10

//5 falsy values: 0, "", undefined, null. Nan
//all of these falsy values will be converted to false when we attempt to convert them to a boolean.. everything else are thruty values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Slady"));
// console.log(Boolean({})); //empty object
// console.log(Boolean(""));

let height; //ovde je var nedefinisano - undefined, a to je falsy value
if (height) {
  //console.log("YEY Height is defined!");
} else {
  //console.log("Height is UNDEFINED"); //i zato ce da pokaze ovu vrednost. i u slucaju da definisemo height da je 0, opet bi pokazivalo isto jer je 0 falsy value (u ovom scenariju, sa ovim if else statemnts to mu dodje kao bug)
}
height = 120;
if (height) {
  //console.log("YEY Height is defined!");
} else {
  c; //onsole.log("Height is UNDEFINED");
} // a u ovom slucaju gde smo odredili height pokazace prvu recenicu, koja je true.

//EQUALITY OPERATORS == vs ===

age = 18; //one = is for asigning value
//if (age === 18) console.log("You just became an adult! :D"); //ako imam samo jedan line of code ne trebaju mi viticaste zagrade, kao za code block
//samo ako je age tacno 18, to znace ova tri znaka jednako === , onda ce da se pokaze sta treba
//=== strict equality operator, doesn't perform type coercion, it only returns true when both values are exactly the same:  "18" === 18  ----> false
//== loose equality operator, does type coercion: "18" == 18  --->true
//== se skoro nikad ne koristi

const favorite = Number(prompt("What is your favorite number?"));
//console.log(favorite);
//console.log(typeof favorite);
// if (favorite == 13) {
//   console.log("Cool! 13 is an amazing number!");
// }
if (favorite === 13) {
  console.log("Cool! 13 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 13 or 7");
}
//if the first condition is false, then it checks for another condition (and another and another, as much else if there is) and if that's also false then it's gonna execute else

//different operator:
if (favorite !== 13) console.log("Why not 13?");
