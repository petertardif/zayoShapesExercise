
const area = (state) => ({
  calcArea() {

    switch(state.name) {
      case 'circle' : 
        const finalArea = Math.PI * (state.radius ** 2);
        return finalArea.toFixed(2);
      case 'rectangle':
        return state.height * state.width;;
      case 'square':
        return state.length ** 2;
      case 'triangle':
        return state.base/2 * state.height;

      default: return `Cannot calculate area of unknown shape.`
    }
  }
});

module.exports = { area };