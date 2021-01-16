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

const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
      if (!results[sentence[index]]) {
        results[sentence[index]] = [];
      }
      results[sentence[index]].push(index);
    }
  }
  return results;
};

assertArrEq(letterPositions("hello").l, [2, 3]);//p
assertArrEq(letterPositions("hello").e, [1]); //p
assertArrEq(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); //p
assertArrEq(letterPositions("lighthouse in the house").h, [3, 5]); //f