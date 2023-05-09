'use strict';
/*
1. Recreate challenge 3, but this time using ES6 classes: create and 'EVCl' child class of the 'CarCl'
class

2. Make the 'charge' property private

3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the Car class. Then experiment with chaining

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    console.log(`${this.make} is going ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery is at ${chargeTo}%`);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.accelerate().brake().brake().brake().chargeBattery(70).accelerate();
