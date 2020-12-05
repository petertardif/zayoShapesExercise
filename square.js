const Shape = require('./shapes');

class Square extends Shape {
  constructor(length) {
    super(length, length, length, length);
    this.name = 'square';
  }
  area() {
    return this.length ** 2;
  }
  printDimensions() {
    return `${this.length} x ${this.length}`
  }
}

module.exports = Square;