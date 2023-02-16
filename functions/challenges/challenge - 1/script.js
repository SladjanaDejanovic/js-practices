"use strict";

/*
Build  a simple poll app

Poll has a question, an array of options from which poeple can choose, and an array with the number of replies for each option. this data is stored in the starter object below.

Tasks:
1. Create a method called "registerNewAnswer" on the "poll" object. The method does 2 things: 
  1) Display a prompt window for the user to input the number of the selected option. The prompt shoul look like this:
    What is your favorite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)

  2) Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is  anumber and if the number makes sense (number 52 wouldn't make sense)

2. Call this method whenever the user clicks the Answer poll button

3. Create method "displayresults" which displays the poll results. The method takes a string as an input (called "type"), which can be either "string" or "array". If type is "array", simply display the result array as it is, using console.log(). this should be default option. If type is "string" display a string like "Poll results are 13, 2, 4, 1"

4. Run the "displayresults" method at the ned of each "registerNewAnswer" method call

hint: use this and last section

BONUS: Use "displayResults" method to display the 2 arrays in the test data. Use both the "array" and the "string" option. Do NOT put the arrays in the poll object! So what the this kw look like in this situation?

bonus test data 1: [5, 2, 3]
bonus test data 2: [1, 5, 3, 9, 6, 1]







*/
