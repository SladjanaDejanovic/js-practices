'use strict';
// Immutable objects
///// to make object immutable Object.freeze(), which freezes only the first level of the object, we still can change object inside of this object
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// changing object inside of object
// budget[0].value = 1000;

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// we can no longer put any new properties
// spendingLimits.jay = 200;
// console.log(spendingLimits); // object would not change

const getLimit = user => spendingLimits?.[user] ?? 0;

// Dealing with side effects
///////// function that produces side effects(soemthing outside of the function is manipulated or func does something else than retur a value)) is called impure function. To avoid this we should pass in all the data that func need, so it doesn't have to reach to outer scope, and func should not change any of these values. Also creating a copy and then return that copy of the state

// usually we won't pass in more than 3 parameters
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas'; // if there is no user, set user to jonas, like making default parameter
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // // instead nested if/else block, use ternary operator:
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // // in this case we can use optional chaining:
  // const limit = spendingLimits?.[user] ?? 0;

  // if (value <= getLimit(cleanUser)) {
  //   return [...state, { value: -value, description, user }];
  //   // budget.push({ value: -value, description, cleanUser });
  // }

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

const logbigExpenses = function (bigLimit) {
  let output = '';
  // if (entry.value <= -bigLimit) {
  //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  // }
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logbigExpenses(500);

//
