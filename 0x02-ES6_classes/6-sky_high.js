import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class (Building) constructor with sqft
    super(sqft);
    this._floors = floors; // Assign floors to _floors
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}