const assertE = require('./LAssertE')

const eqArr = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (Array.isArray(array1[index]) && Array.isArray(array2[index])) {
      if (!eqArr(array1[index], array2[index])) {
        return false;
      }
    } else if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArr;