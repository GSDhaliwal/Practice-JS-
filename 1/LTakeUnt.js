const eqArr = require('./LEqArr');
const assertArrEq = require('./LAssertArrEq');

const takeUnt = function(array, cb) {
  let finalArray = [];
  for (let element of array) {
    if(cb(element)) {
      break;
    }
    finalArray.push(element);
  }
  return finalArray;
};

module.exports = takeUnt;
/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUnt(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUnt(data2, x => x === ',');


assertArrEq(results1, [1, 2, 5, 7, 2]); // => should PASS
assertArrEq(results1, [1, 2, 5, 7]);// FAIL
assertArrEq(results2, ["I've", "been", "to", "Hollywood"]);// pass
assertArrEq(results2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);// fail
*/