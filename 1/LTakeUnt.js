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


const eqArr = function(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (array1.length !== array2.length || array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};

const assertArrEq = function(actual, expected) {
  return (eqArr(actual, expected) === true ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUnt(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUnt(data2, x => x === ',');


assertArrEq(results1, [1, 2, 5, 7, 2]); // => should PASS
assertArrEq(results1, [1, 2, 5, 7]);// FAIL
assertArrEq(results2, ["I've", "been", "to", "Hollywood"]);// pass
assertArrEq(results2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);// fail