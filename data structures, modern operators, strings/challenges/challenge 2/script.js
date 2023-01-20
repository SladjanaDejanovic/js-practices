"use strict";

/*
1. loop over the game.scored array and print each player name to the console, along with the goal number (example: "Goal 1: Lewandowski")

2. use a loop to calculate the average odd and log it to the console 

3.print the 3 odds to the console, but in a nice formated way: 
Odd of victory Bayern Munich: 1.33
odd for draw: 3.25
Odd for victory Borrussia Dortmund: 6.5
get the team names directly from the game object, don't hardcode them (except for draw). hint: note how the odds and the game objects have the same property names

bonus: create an object called "scorers" which contains the names of the players who scored as properties, and the number of goals as the value. in this game, it will look like this:
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}

*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
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
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odds for ${teamStr}: ${odd}`);
}

// bonus: create an object called "scorers" which contains the names of the players who scored as properties, and the number of goals as the value. in this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }
//solution to bonus:
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
