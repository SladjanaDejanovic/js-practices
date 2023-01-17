"use strict";
/*
1. Create one player array for each team (variables players1 and players2)

2. the first player in any array is the goalkeeper and the others are field players. for bayern munich (team1) create one variable ("gk") with the goalkeeper's name, and one array ("fieldPlayers") with all the remaining 10 field player

3. create an array "allPlayers" containing all players of both teams (22 players)

4. during the game, bayern munich (team 1) used 3 substitute players. so create a new array ("playersFinal") containing all the original team1 players plus "Thiago", "Coutinho" and "Perisic"

5. based on the game.odds object, create one variable for each odd (called "team1", "draw", and "team2")

6. write a function ("printGoals") that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
TEST DATA FOR 6: use players "Davies", "Mullier", "Lewandowski" and "Kimmich". then call the function again with players from game.scored

7. the team with the lower odd is more likely to win. print to the console which team is more likely to win, WITHOUT using if/else statement or the ternary operator



*/

const game = {
  team1: "Bayern Munich",
  tem2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Devies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:8",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. (nested destructuring)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// const {
//   fri: { open: o, close: c },
// } = openingHours;

// 6.(when we want to put arbitrary number of argumnets for a function, we use  rest (...))
//rest operator puts bunch of separate values in one array
const printGoals = function (...players) {
  // console.log(players);
  console.log(`${players.length} goals were scored`);
  for (let i = 0; i < players.length; i++) console.log(players[i]);
};
printGoals("Davies", "Mullier", "Lewandowski", "Kimmich");
printGoals("Davies", "Mullier");
printGoals(...game.scored);

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
