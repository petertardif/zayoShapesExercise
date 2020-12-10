const { area } = require('../behaviors/area');
const { dimensions } = require('../behaviors/dimensions');
const { name } = require('../behaviors/name');

function Shape (object) {
  let newObj = {
    name: object.name,
    length: object.length,
    width: object.width,
    height: object.height,
    radius: object.radius,
    base: object.base, 
    hypotenuse: object.hypotenuse
  }
  
  return Object.assign(
    newObj,
    area(newObj),
    dimensions(newObj),
    name(newObj),
  )
}

module.exports = Shape;
