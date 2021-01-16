const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = function(string) {
  let result = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};


const sentence = "lighthouse in the house";

const result1 = countLetters(sentence);

assertE(result1['l'], 1);
assertE(result1['h'], 4);
assertE(result1[' '], undefined);
assertE(result1['s'], 2);
assertE(result1['s'], undefined);