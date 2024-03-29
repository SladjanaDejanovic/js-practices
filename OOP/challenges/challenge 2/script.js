'use strict';
/*

1. Recreate challenge 1, but this time using an ES6 class

2. Add a getter called "speedUS" which returns the current speed in mi/h (divide by 1.6)

3. Add a setter called "speedUS" which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter

DATA CAR 1: "Ford" is going at 120 km/h

 */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate(make, speed) {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  brake(make, speed) {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`Speed is ${speed * 1.6} km/h`);
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.brake();
ford.brake();
ford.brake();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();

ford.speedUS = 100;
