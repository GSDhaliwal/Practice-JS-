const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};


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

assertE(eqArr([1, 2, 3], [1, 2, 3]), true); // => true
assertE(eqArr([1, 2, 3], [3, 2, 1]), false);// => false
assertE(eqArr(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertE(eqArr(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertE(eqArr([1, 2, 3], [1, 2, 3]), false); // => false
assertE(eqArr([1, 2, 3], [3, 2, 1]), true);// => false

assertE(eqArr([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertE(eqArr([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertE(eqArr([[2, 3], [4]], [[2, 3], 4]), false) // => false