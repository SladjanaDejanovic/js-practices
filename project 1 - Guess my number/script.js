"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23; //bc .guess is input, so we can change its value
*/

//HANDLING CLICK EVENTS

//Event here is "click", and we need to specify the reaction to the click event. We are doing that by defining a function which is called the event handler.
//.addEventListener - 1st arguments is event. 2nd argument is event handler function

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  }
});
