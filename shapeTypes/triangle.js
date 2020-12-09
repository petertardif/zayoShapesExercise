const { area } = require('../behaviors/area');
const { dimensions } = require('../behaviors/dimensions');
const { name } = require('../behaviors/name');

function Triangle ( base, height, hypotenuse){
  let triangle = {
    name: 'triangle',
    base, 
    height, 
    hypotenuse
  }

  return Object.assign(
    triangle,
    area(triangle),
    dimensions(triangle),
    name(triangle),
  )
}

module.exports = Triangle;
