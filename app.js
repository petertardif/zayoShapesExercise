const Shape = require('./models/shape');

function runApp() {
  let allShapes = [];
    allShapes.push(
      new Shape({name:'square', length: 4}),
      new Shape({name:'rectangle', height: 4, width: 3}),
      new Shape({name:'triangle', base: 3, height: 4, hypotenuse: 5}),
      new Shape({name:'circle', radius: 3}),
      );

  let printShapes = allShapes.map(shape => {
    console.log(`${shape.printName()}, dimensions: ${shape.printDimensions()}, area: ${shape.calcArea()}`)
  })

  return printShapes
}

runApp();