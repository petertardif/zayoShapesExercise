const { area } = require('../behaviors/area');
const { dimensions } = require('../behaviors/dimensions');
const { name } = require('../behaviors/name');

function Shape (object) {
  // let newObj = object;
  
  return Object.assign(
    object,
    area(object),
    dimensions(object),
    name(object),
  )
}

module.exports = Shape;
