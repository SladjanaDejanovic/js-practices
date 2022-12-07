const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.76;
const johnMass = 85;
const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);

if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn}) is higher tham Mark's (${BMIMark}) !`);
} else {
  console.log(`Mark's BMI is higher than John's ${BMIJohn}`);
}
