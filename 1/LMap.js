const eqArr = require('./LEqArr');
const assertArrEq = require('./LAssertArrEq');

const map = (array, cb) => {
  let mappedArray = [];
  for (let item of array) {
    mappedArray.push(cb(item));
  }
  return mappedArray;
}

module.exports = map; 
/*
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
assertArrEq(results4, ["g", "c", "t", "m", "t"]);// fail*/