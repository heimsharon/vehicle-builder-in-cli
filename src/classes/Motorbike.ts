// This file builds the Motorbike class with parent class: Vehicle

import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Motorbike class that extends Vehicle class
class Motorbike extends Vehicle {
  //  Declares properties of the Motorbike class  
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor for Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  )

  // Calling the constructor of the parent class: Vehicle
  { super();

    // Initializes properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels

    // Checks if the wheels array has 2 elements and creates 2 new default Wheel objects if it does not
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    }
    else {
      this.wheels = wheels;
    }
  }

  // Implements the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // Overrides the printDetails method from the Vehicle class
  override printDetails(): void {
    // Calls the printDetails method of the parent class, Vehicle
    super.printDetails();
    // Prints details of the Motorbike class
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.map(wheel => wheel.toString()).join(', ')}`);
  }
}

// Exports the Motorbike class as the default export
export default Motorbike;
