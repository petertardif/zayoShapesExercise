const { area } = require('../behaviors/area');
const { dimensions } = require('../behaviors/dimensions');
const { name } = require('../behaviors/name');

function Rectangle (height, width) {
  let rectangle = {
    name: 'rectangle',
    height,
    width,
  }
  
  return Object.assign(
    rectangle,
    area(rectangle),
    dimensions(rectangle),
    name(rectangle),
  )
}

module.exports = Rectangle;
