const Utils = {
    calculateNumber: (type, a, b) => {
      switch (type) {
        case 'SUM':
          return a + b;
        default:
          throw new Error('Invalid type');
      }
    }
  };
  
  module.exports = Utils;
  