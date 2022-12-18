"use strict";
/*
dolphins and koalas, each team competes 3 times, then calculate average of 3 scores

tema only wins if it ahs at least double the average score of the other team. otherwise, no team wins

1.create an arrow function calcAverage to calculate the average of 3 scores
2. calculate avg for both teams with this function
3.create a function checkWinner that takes the avg score of each team as parameters(avgDolphins and avgKoalas), and then logs the winner to the console, with victory points (example "koalas win(30 vs 13)"
4. use data1 and data2
5.ignore draws

test data 1: dolphins 44, 23, 71
koalas 65,54,49

test data 2: dolphins 85, 54, 41
koalas 23, 34, 27

a >= 2 * b

*/
//const calcAge4 = (birthYear) => 2037 - birthYear;

const calcAgerage = (a, b, c) => (a + b + c) / 3;

//test 1
let scoreDolphins = calcAgerage(44, 23, 71);
let scoreKoalas = calcAgerage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No winner!");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

//test 2
scoreDolphins = calcAgerage(85, 54, 41);
scoreKoalas = calcAgerage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
