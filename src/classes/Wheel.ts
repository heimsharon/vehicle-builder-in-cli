//This file builds the Wheel class

// Defines the properties of Wheel class
class Wheel {
  // Declares properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;

  // Constructor for the Wheel class
  constructor(
    diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  // Getter methods for the properties of the Wheel class
  get getDiameter(): number {
    return this.diameter;
  }

  // Setter method for the diameter property
  get getTireBrand(): string {
    return this.tireBrand;
  }

  // toString method to provide a string representation of the wheel
  toString(): string {
    return `${this.tireBrand} (${this.diameter} inches)`;
  }
}
// Exports the Wheel class
export default Wheel;
