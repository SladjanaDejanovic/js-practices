let country = "Serbia";
const continent = "Europe";
// let population = 6.8;
// // console.log(country, continent, population);
// let isIsland = false;
//let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//////// MATH OPERATORS

const now = 2037;
const ageSlady = now - 1994;
const ageYuri = now - 1999;
const averageAge = (ageSlady + ageYuri) / 2;
// console.log(ageSlady, ageYuri, averageAge);

// const firstName = "Sladjana";
// const lastName = "Dejanovic";
// console.log(firstName + " " + lastName);

//////    ASSIGNMENT OPERATORS

let x = 10 + 5;
x += 10; // to value x (which is 15 bc of the above) add 10
x *= 4; // value x (which is now 25) times 4
x++; //x = x + 1
// console.log(x);

////////// COMPARISON OPERATORS

// console.log(ageSlady > ageYuri);
// console.log(ageYuri >= 30);

const isAge = ageYuri >= 30; //store this result if we need it later in code

// console.log(now - 1994 > now - 1999); //isto sto i ovo: console.log(ageSlady > ageYuri);, da ne mora da se racuna posebno (12, 13, 14 red), nego odmah ovde ovako

////////   STRINGS AND ...

const firstName = "Slady";
const job = "bookbinder";
const birthYear = 1994;
const year = 2030;

const slady =
  "I'm " + firstName + ", a " + (year - birthYear) + " yaers old " + job;
// console.log(slady);

/////   ...TEMPLATE LITERALS

const sladyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(sladyNew);
//laksi nacin da se napise string. koristi se back tick, dugme iznad taba. variables se pisu ${ime var, ili func ili bilo sta}
// console.log(`String
// multiple
// lines`); //creating multi line string (enter...logicno)

///////(assignment)

let population = 6.8;
// console.log(population / 2);
// population++;
// console.log(population);
let finland = 6;
// console.log(population > finland);
let averagePopulation = 33;
// console.log(averagePopulation > population);
//language = "serbian";
// let description =
//   country +
//   " is in " +
//   continent +
//   ", and it's " +
//   population +
//   " people speak " +
//   language +
//   ".";

//let description = `${country} is in ${continent}, and it's ${population} people speak ${language}.`;
// console.log(description);

if (population > averagePopulation) {
  //console.log("Serbian population is above average.");
} else {
  //console.log("Serbian population is bellow avarage");
}

/////////   IF / ELSE STATEMNTS (if/else control structure)

var age = 15;

if (age >= 18) {
  // console.log("Sarah can start driving 🚗");
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

//////////////  TYPE CONVERSION

const inputYear = "1994";
//console.log(Number(inputYear)); //this would give converted version, from string to number, but the original will still remain in a form of a string
//console.log(inputYear + 18); //that's why this isnt working still
//console.log(Number(inputYear) + 18);
//console.log(String(23));

//prompt window always returns a string, no matter what the input is (if we put 10, later in code it will be "10", it won't be a number, until we turn it into a number with Number())

//////////TYPE COERCION

//console.log("i am " + 28 + " years old"); //whenever an operatior is dealing with 2 values that have different types. js will then behind the scenes convert one of the values to match the other value. PLUS WILL MAKE NUMBERS INTO STRINGS
//console.log("23" - "10" - 3); //MINUS operator trigers opposite conversion, making STRINGS INTO NUMBERES

let n = "1" + 1; //"11" - sve pretvara u string
n = n - 1; // a onda jer se koristi minus to n pretvara u broj
//console.log(n); //tako da n ispadne 10

/////FALSY AND THRUTY VALUES

//5 falsy values: 0, "", undefined, null, NaN

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
  //console.log("Height is UNDEFINED");
} // a u ovom slucaju gde smo odredili height pokazace prvu recenicu, koja je true.

/////////////// EQUALITY OPERATORS == vs ===

age = 18; //one = is for asigning value
//if (age === 18) console.log("You just became an adult! :D"); //ako imam samo jedan line of code ne trebaju mi viticaste zagrade, kao za code block
//samo ako je age tacno 18, to znace ova tri znaka jednako === , onda ce da se pokaze sta treba

//=== strict equality operator, doesn't perform type coercion, it only returns true when both values are exactly the same:  "18" === 18  ----> false

//== loose equality operator, does type coercion: "18" == 18  --->true

//== se skoro nikad ne koristi

// const favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);
//  if (favorite == 13) {
//    console.log("Cool! 13 is an amazing number!");
//  }

// if (favorite === 13) {
//   //console.log("Cool! 13 is an amazing number!");
// } else if (favorite === 7) {
//   //console.log("7 is also a cool number");
// } else {
//   //console.log("Number is not 13 or 7");
// }
//if the first condition is false, then it checks for another condition (and another and another, as much else if there is) and if that's also false then it's gonna execute else

//different operator:
//if (favorite !== 13) console.log("Why not 13?");

//////////    LOGICAL OPERATOS

const hasDriversLicence = true; //A
const hasGoodVision = true; //B

//console.log(hasDriversLicence && hasGoodVision); //&& znaci AND
//console.log(hasDriversLicence || hasGoodVision); // || znaci OR
//console.log(!hasDriversLicence); //! znaci NOT

// if (hasDriversLicence && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = false; //C
//console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  //console.log("Sarah is able to drive");
} else {
  //console.log("Someone else should drive.");
}

/////////(assignment)

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only one border");
// } else if (numNeighbours > 1) {
//   console.log("More than one border");
// } else {
//   console.log("No borders");
// }

/////////////  THE SWITCH STATEMENT

// const day = "tuesday";
// switch (day) {
//   case "monday": //day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; //without break code just keeps executing
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednsday":
//   case "thurstay": // ako hocemo da izvrsimo istu stvar za dva razlicita dana, onda mozemo da napisemo case"": i onda odma drugi ispod case"":   i onda ce to da se primeni na oba slucaja
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default: //like else block at the end of if else statement
//     console.log("Not a valid day");
// }

//all this but as if/else statement:

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednsday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day");
// }

/////////// (assignment)
// let language = "serbian";
// switch (language) {
//   case "mandarin":
//   case "chinese":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers!");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//   case "arabic":
//     console.log("5th most spoken language");
//   default:
//     console.log("Great language too! :D");
// }

///// STATEMTS AND EXPRESSIONS
3 + 4; //expression is something that gives value
1991;
true && false && !true;

if (23 > 10) {
  const str = "23 is bigger";
} // this is a statement (same as swtitch statemnt)(could be called declaration)

//in template literals we can put only expressions (something that gives value). ${} --> that's expression. we can't insert any statement, like if/else statement, inside this ${}
//console.log(`I'm ${2037 - 1994} years old.`);

////////    THE CONDITIONAL (TERNATY) OPERATOR

var age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷") // if conditon is true then it will be executed this line of code, and we can put only 1 line of code after ?
//   : console.log("I like to drink water"); //  ? if : else
// used instead if else statement, it's also called ternaty operator bc it has 3 parts: condition, if part, else part

//operetaror produces value, so it's an expression

//useful to conditionally declare variables:
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

//any variable we declare inside a block is not available outside, so we have to declare it outside
// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

//it can be used in template literal:
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//  if-else are CONTROL structures, arrays and objects are DATA structures
