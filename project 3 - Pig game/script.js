"use strict";

//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score"); //different way of selecting elemnts, and this works faster than querySelector
const diceEl = document.querySelector(".dice");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
