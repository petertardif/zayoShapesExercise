const name = (state) => ({
  printName() { 
    return `name: ${state.name}`; 
  }
});

module.exports = { name };