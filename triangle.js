const Shape = require('./shapes');

class Triangle extends Shape {
  constructor(height, width, length) {
    super(height, height, width, length);
    this.name = 'triangle'
  }
  area() {
    return this.width/2 * this.height;
  }
  printDimensions() {
    return `a${this.height} x  b${this.width} x c${this.length}`
  }
}

module.exports = Triangle;