// 5-building.js
export default class Building {
    constructor(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
  
      this._sqft = sqft;
  
      // Enforce implementation of evacuationWarningMessage in subclasses
      if (this.constructor !== Building &&
          this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method to be overridden
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  