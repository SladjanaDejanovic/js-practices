'use strict';

/*
1. Use a constructor function to implement an Electrict Car (called EV) as a child "class" of Car. Besides make and current speed, the EV also has the current battery charge in % ('charge' property)

2. Implement a 'ChargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease charge by 1%. Then log a message like this: "Tesla going at 140 km/h, with charge of 22%"

4. Create an electric car object and experiment with calling 'accelerate' and 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate' (hint: review the definition of polymorphism)

DATA CAR 1: 'Tesla' going at 120 km/h with a charge of 23%
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function (make, speed) {
  this.speed += 10;

  console.log(`${this.make} is going ${this.speed} km/h`);
};

Car.prototype.brake = function (make, speed) {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Battery is at ${chargeTo}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();

tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();

tesla.chargeBattery(60);
tesla.chargeBattery(90);
