const Square = require('./shapeTypes/square');
const Rectangle = require('./shapeTypes/rectangle');
const Triangle = require('./shapeTypes/triangle');
const Circle = require('./shapeTypes/circle');

function runApp() {
  let allShapes = [];
  allShapes.push(new Square(4),new Rectangle(4,3),new Triangle(3,4,5),new Circle(3));

  let printShapes = allShapes.map(shape => {
    console.log(`${shape.printName()}, dimensions: ${shape.printDimensions()}, area: ${shape.calcArea()}`)
  })

  return printShapes
}

runApp();