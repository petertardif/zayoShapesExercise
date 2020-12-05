const Shape = require('./shapes');

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, height, width, width);
    this.name = 'rectangle';
  }
  area() {
    return this.height * this.width;
  }
  printDimensions() {
    return `${this.height} x ${this.width}`
  }
}

module.exports = Rectangle;