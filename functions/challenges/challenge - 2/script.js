"use strict";

/*
Take a IIFE below and at the end of the func attach a event listener that changes the color of the selected h1 element (header) to blue, each time the body element is clicked. Do NOT select the h1 again

explain to yourself why this works, think about when exactly the callback func is executed, and what that means for the variables involved in this example

*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// possible bc of closure
