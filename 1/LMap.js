const map = (array, cb) => {
  let mappedArray = [];
  for (let item of array) {
    mappedArray.push(cb(item));
  }
  return mappedArray;
}

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

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["let", "us", "go", "outside"];
const words3 = ["I", "believe", "I", "can", "fly"];

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
const results4 = map(words3, word => word[0]);

assertArrEq(results1, ["g", "c", "t", "m", "t"]); // => should PASS
assertArrEq(results2, ["h", "f", "i", "n", "f", "a"]);// FAIL
assertArrEq(results3, ["I", "b", "I", "c", "f"]);// pass
assertArrEq(results4, ["g", "c", "t", "m", "t"]);// fail