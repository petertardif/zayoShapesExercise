const { area } = require('../behaviors/area');
const { dimensions } = require('../behaviors/dimensions');
const { name } = require('../behaviors/name');

function Circle (radius) {
  let circle = {
    name: "circle",
    radius,
  }

  return Object.assign(
    circle,
    area(circle),
    dimensions(circle),
    name(circle),
  )
}

module.exports = Circle;
