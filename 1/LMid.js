const mid = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
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

assertArrEq([], mid([1])); //PASS
assertArrEq([], mid([1, 2])); //Pass
assertArrEq([2], mid([1, 2, 3])); //PASS
assertArrEq([3], mid([1, 2, 3, 4, 5])); //pass
assertArrEq([2, 3], mid([1, 2, 3, 4])); //PASS
assertArrEq([3, 4], mid([1, 2, 3, 4, 5, 6])); //pass

assertArrEq([1], mid([1])); //fail
assertArrEq([1], mid([1, 2])); //fail
assertArrEq([1], mid([1, 2, 3])); //fail
assertArrEq([5], mid([1, 2, 3, 4, 5])); //fail
assertArrEq([3], mid([1, 2, 3, 4])); //fail
assertArrEq([4, 2], mid([1, 2, 3, 4, 5, 6])); //fail