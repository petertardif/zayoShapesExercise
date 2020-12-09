const { area } = require('../behaviors/area');
const { dimensions } = require('../behaviors/dimensions');
const { name } = require('../behaviors/name');

function Square (length) {
  let square = {
    name: 'square',
    length,
  }
  
  return Object.assign(
    square,
    area(square),
    dimensions(square),
    name(square),
  )
}

module.exports = Square;
