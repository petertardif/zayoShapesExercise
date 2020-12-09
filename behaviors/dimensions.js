
const dimensions = (state) => ({
  printDimensions() {
    switch(state.name) {
      case 'circle':
        return `radius: ${state.radius}`;
      case 'rectangle':
        return `${state.height} x ${state.width}`;
      case 'square':
        return `${state.length} x ${state.length}`;
      case 'triangle':
        return `a${state.base} x  b${state.height} x c${state.hypotenuse}`;

      default: return `No dimensions provided.`
    }
  }
});

module.exports = { dimensions };