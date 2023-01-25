"use strict";

/*
map with a log of the events htat happened during the game. the values are events themselves, and the keys are the minutes in which each event happened

1. create an array "events" of the different game events that happened (no duplicates)

2. after the game has finished, it was found that the yellow card from minute 64 was unfair. so remove this event from the game log

3. print the following string to the console: "an event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. loop over the events and log them to the console, marking wheater it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽ GOAL

*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);

// 1.
// const arr = [...gameEvents.values()];
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
let time = 90;
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// bonus - to get exact minute, which is the last element of array. using pop(), this method deletes dalst element but it also returns it:
const gameTime = [...gameEvents.keys()].pop();
console.log(gameTime);
console.log(
  `An event happened, on average, every ${gameTime / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  [key] <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
} // next time see what is same (key and value) and calculate only what's different (this FIRST/SECOND part)

// solution from course:
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
