const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};


const eqArr = function(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (array1.length !== array2.length || array1[index] !== array2[index]) {
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