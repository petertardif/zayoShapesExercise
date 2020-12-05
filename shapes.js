'use strict';

class Shape {
  constructor(name, height, width, length) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.length = length;
  }
  // All shapes should be able to print their name
  printName() {
    return `My name is ${this.name}.`
  }
}

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


function runApp() {
  let allShapes = [];
  allShapes.push(new Square(4),new Rectangle(4,3),new Triangle(3,4,5),new Circle(3));

  let printShapes = allShapes.map(shape => {
    console.log(`name: ${shape.name}, dimensions: ${shape.printDimensions()}, area: ${shape.area()}`)
  })

  return printShapes
}

runApp();