const Shape = require('./shapes');

class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = 'circle';
    this.radius = radius;
  }
  area() {
    let calcArea = Math.PI * (this.radius ** 2)
    return calcArea.toFixed(2)
  }
  printDimensions() {
    return `radius: ${this.radius}`
  }
}

module.exports = Circle;