'use strict';
const account1 = {
  owner: 'Jonas Shmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

// 2.
// const numDeposit1000 = accounts
//
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposit1000);

// same using reduce():
const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // accumulator in this case (when we wanna count how meny deposits are there over 1000) will be the number of movements greater than 1000
console.log(numDeposit1000);

// clarification for ++
// when we use a++ it adds 1, but it only shows the original, it returns original value even so it added one
let a = 10;
console.log(a++); // it still shows 10
// when we log it again:
console.log(a); //now it shows that it was increased indeed
// to fix this (if we really wanna use ++ instead of  + 1):
console.log(++a); //and now it imediatelly returns the increased value

// 3. creating an object
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      // other way to do this, without repeating:
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums; // when we have function body in arrow function (code in {}) we have to explicitly do return
    },

    { deposits: 0, withdrawals: 0 }
  ); // here acculuator is called sums, and it's basically this second object with deposits and withdrawals, on that we are gonna add our values

console.log(deposits);
console.log(withdrawals);

// 4. convert any string to title case(all words in sentence are capitalized, except some of them)
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [
    'a',
    'an',
    'the',
    'but',
    'or',
    'on',
    'in',
    'to',
    'with',
    'of',
    'as',
    'at',
    'and',
    'by',
    'for',
    'so',
    'yet',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));

console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
