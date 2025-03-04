// This file builds the AbletoTow interface

import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// Defines the interface
interface AbleToTow {
    // Declares the properties
    towingCapacity: number;
    // Tow method that takes a truck or a motorbike or a car as an argument
    tow(vehicle: Truck | Motorbike | Car): void;
}

// Exports the interface
export default AbleToTow;
