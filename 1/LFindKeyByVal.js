const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const findKeyByVal = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertE(findKeyByVal(bestTVShowsByGenre, "The Wire"), "drama"); //p
assertE(findKeyByVal(bestTVShowsByGenre, "That '70s Show"), undefined); //p
assertE(findKeyByVal(bestTVShowsByGenre, "The Expanse"), "drama"); //f
assertE(findKeyByVal(bestTVShowsByGenre, "The Expanse"), "sci_fi"); //p