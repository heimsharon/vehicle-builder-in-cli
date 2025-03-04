// This file builds the Cli.

import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// Defines the Cli class
class Cli {
  vehicles: (Truck | Car | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Truck | Car | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // Static method to generate a vin for newly created vehicle
  static generateVin(): string {
    // Return a random string to be used as a vin
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // Method that allows user to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // Sets the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // Perform actions on the selected vehicle
        this.performActions();
      });
  }

  // Method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Truck', 'Car', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // Creates a car
          this.createCar();
        } 
        else if (answers.vehicleType === 'Truck') {
          // Creates a truck
          this.createTruck();
        } 
        else if (answers.vehicleType === 'Motorbike') {
          // Creates a motorbike
          this.createMotorbike();
        }
      });
  }

  // Method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers: { color: string; make: string; model: string; year: string; weight: string; topSpeed: string; frontWheelDiameter: string; frontWheelBrand: string; rearWheelDiameter: string; rearWheelBrand: string }) => {
        const wheels = [
          new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
          new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
          new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
          new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
        ];

        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels
        );

        // Pushes the car to the vehicles array
        this.vehicles.push(car);
        // Sets the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // Performs actions on the car
        this.performActions();
      });
  }

  // Method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers: { color: string; make: string; model: string; year: string; weight: string; topSpeed: string; towingCapacity: string; frontWheelDiameter: string; frontWheelBrand: string; rearWheelDiameter: string; rearWheelBrand: string }) => {
        const wheels = [
          new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
          new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
          new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
          new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
        ];

        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels,
          parseInt(answers.towingCapacity)
        );

        // Pushes the truck to the vehicles array
        this.vehicles.push(truck);
        // Sets the selectedVehicleVin to the vin of the truck
        this.selectedVehicleVin = truck.vin;
        // Performs actions on the truck
        this.performActions();
      });
  }

  // Method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers: { color: string; make: string; model: string; year: string; weight: string; topSpeed: string; frontWheelDiameter: string; frontWheelBrand: string; rearWheelDiameter: string; rearWheelBrand: string }) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
            new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand)
          ]
        );

        // Pushes the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // Sets the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
        // Performs actions on the motorbike
        this.performActions();
      });
  }

  // Method to find a vehicle to tow
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers: { vehicleToTow: Truck | Car | Motorbike }) => {
        const vehicleToTow = answers.vehicleToTow;
        if (vehicleToTow === truck) {
          console.log("The truck cannot tow itself.");
          this.performActions();
        } 
        else {
          truck.tow(vehicleToTow);
          this.performActions();
        }
      });
  }

  // Method to perform actions on a vehicle
  performActions(): void {
    const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);

    const actions = [
      'Print details',
      'Start vehicle',
      'Accelerate 5 MPH',
      'Decelerate 5 MPH',
      'Stop vehicle',
      'Turn right',
      'Turn left',
      'Reverse',
      'Select or create another vehicle',
      'Exit',
    ];

    // Adds "Tow a vehicle" option if the selected vehicle is a truck
    if (selectedVehicle instanceof Truck) {
      actions.splice(8, 0, 'Tow a vehicle');
    }
    // Adds "Do a wheelie" option if the selected vehicle is a motorbike
    if (selectedVehicle instanceof Motorbike) {
      actions.splice(8, 0, 'Do a wheelie');
    }

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          choices: actions,
        },
      ])
      .then((answers: { action: string }) => {
        // Performs the selected action
        if (answers.action === 'Print details') {
          // Finds the selected vehicle and prints its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } 
        else if (answers.action === 'Start vehicle') {
          // Finds the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } 
        else if (answers.action === 'Accelerate 5 MPH') {
          // Finds the selected vehicle and accelerates it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } 
        else if (answers.action === 'Decelerate 5 MPH') {
          // Finds the selected vehicle and decelerates it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } 
        else if (answers.action === 'Stop vehicle') {
          // Find the selected vehicle and stops it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } 
        else if (answers.action === 'Turn right') {
          // Finds the selected vehicle and turns it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } 
        else if (answers.action === 'Turn left') {
          // Find the selected vehicle and turns it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } 
        else if (answers.action === 'Reverse') {
          // Finds the selected vehicle and reverses it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        } 
        else if (answers.action === 'Tow a vehicle') {
          // Performs the tow action only if the selected vehicle is a truck
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Truck) {
              this.findVehicleToTow(this.vehicles[i] as Truck);
              return;
            }
          }
        } 
        else if (answers.action === 'Do a wheelie') {
          // Performs the wheelie action only if the selected vehicle is a motorbike
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Motorbike) {
              (this.vehicles[i] as Motorbike).wheelie();
            }
          }
        } 
        else if (answers.action === 'Select or create another vehicle') {
          // Starts the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } 
        else {
          // Exit the cli if the user selects exit
          this.exit = true;
        }

        if (!this.exit) {
          // If the user does not want to exit, performs actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // Method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // Checks if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } 
        else {
          this.chooseVehicle();
        }
      });
  }
}

// Exports the Cli class
export default Cli;