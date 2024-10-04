export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (new.target == Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
	  "Building is an abstract class and cannot be instantiated directly.");
      }
    }
  }
  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method (should be overridden in subclasses)
  set sqft() {
    this._sqft = value;
  }
}
