// This file builds the Driveable interface

// Defines the interface
interface Driveable {
  // Declares the properties
  started: boolean;
  currentSpeed: number;
  // Declares the methods
  start(): void;
  accelerate(change: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
}

// Exports the Driveable interface
export default Driveable;
