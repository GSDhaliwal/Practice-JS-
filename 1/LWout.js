const eqArr = require('./LEqArr');
const assertArrEq = require('./LAssertArrEq');

const without = function(source, itemsToRemove) {
  let filteredResult = [];
  let flag = false;

  for (let element of source) {
    flag = false;
    for (let item of itemsToRemove) {
      if (element === item) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      filteredResult.push(element);
    }
  }
  return filteredResult;
};

module.exports = without;
/*
assertArrEq([2, 3], (without([1, 2, 3], [1]))); //PASS
assertArrEq([1, 2, 3], (without([1, 2, 3], [1]))); //FAIL
*/