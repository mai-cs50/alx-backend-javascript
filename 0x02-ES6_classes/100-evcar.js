import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this._range = range;        // Store the range attribute
  }

  // Override the cloneCar method
  cloneCar() {
    return new Car(this._brand, this._motor, this._color); // Return an instance of Car
  }
}