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

assertArrEq([1, 2, 3], [1, 2, 3]);
assertArrEq([1, 2, 3], [3, 2, 1]);
assertArrEq(["1", "2", "3"], ["1", "2", "3"]);
assertArrEq(["1", "2", "3"], ["1", "2", 3]);