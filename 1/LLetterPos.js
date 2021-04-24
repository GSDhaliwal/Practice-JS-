const eqArr = require('./LEqArr');
const assertArrEq = require('./LAssertArrEq');

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

module.exports = letterPositions;
/*
assertArrEq(letterPositions("hello").l, [2, 3]);//p
assertArrEq(letterPositions("hello").e, [1]); //p
assertArrEq(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); //p
assertArrEq(letterPositions("lighthouse in the house").h, [3, 5]); //f
*/