const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

assertE("Lighthouse Labs", "Bootcamp");
assertE(1, 12);
assertE("Lighthouse Labs", "Lighthouse Labs");
assertE(1, 1);