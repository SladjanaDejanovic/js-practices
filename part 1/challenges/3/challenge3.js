/*calculate average score for each team
test data dolphins 96, 108,89
koalas 88, 91, 110

compare averages to set the winner and cl. it could be tie too

bonus: include requirement for a minimum score of 100. team only wins if it has higher score than other team and at least 100 points
test data d 97, 112, 101  k 109, 95, 123
bonus 2: minimum score also applies to a draw. draw only happens when both teams have the same score and both more than 100 points. otherwise no team wins the thropy
test   d 97,112,101    k 109,95,106
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(avgDolphins);
// console.log(avgKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the thropy!");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the thropy!");
// } else{
//   console.log("It's a draw!");
// }

//bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (100 + 95 + 123) / 3;

// if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win!");
// } else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
//   console.log("Koalas win!");
// }

//bonus 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
  console.log("Dolphins win!");
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
  console.log("Koalas win!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both teams win the trophy!");
} else {
  console.log("No one wins");
}
