// This file builds the Truck class with parent class: Vehicle

import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js'

// Truck class that extends Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  towingCapacity: number;
  wheels: Wheel[];

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) 

  // Calling the constructor of the parent class: Vehicle
  { super();

    // Initializes properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Checks if the wheels array has 4 elements and creates 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } 
    else {
      this.wheels = wheels;
    }
  }

  // Overrides the printDetails method from the Vehicle class
  override printDetails(): void {
    // Calls the printDetails method of the parent class: Vehicle
    super.printDetails();
    // Prints details of the Truck class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);

    // Prints details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }

   // Implements the tow method from the AbleToTow interface
   tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle if it exists
    const make = vehicle.make;
    const model = vehicle.model;

    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      // If it is, log that the vehicle is being towed
      console.log(`Towing ${make} ${model} with VIN: ${vehicle.vin}`);
    } 
    else {
      // If it is not, log that the vehicle is too heavy to be towed
      console.log(`The ${make} ${model} is too heavy to be towed`);
    }
  }
}
// Exports the Truck class as the default export
export default Truck;