"use strict";
/*
//PROBLEM 1: given an array of temperatures of one day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem
// - What is a temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temp?
// - What's a sensor error? What to do?

//2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2: Function now should recieve 2 arrays

//1) Understanding the problem
// - With 2 arrays should we implement functionality twice? Answer: No, just merge 2 arrays

//2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    //C) FIX
    value: Number(prompt("Degrees celsius:")), //bc prompt will always give a string, so we have to turn it into a number like this
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) IDENTIFY
console.log(measureKelvin());
