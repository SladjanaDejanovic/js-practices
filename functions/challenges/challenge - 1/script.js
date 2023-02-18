"use strict";

/*
Build  a simple poll app

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

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`
      )
      //solution from course prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`
    );

    console.log(answer);

    // register answer (with short circuiting)
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//// bonus - solution from course:
// using the method outside its object(calling that function) but now have to change what this kw is, so we call() on it, saying what we're reffering to now (we are reffering to array, this kw has to points to array now), creating new object immediatelly inside with array we want to use
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
