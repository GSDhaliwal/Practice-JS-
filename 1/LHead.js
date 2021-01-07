const head = function(array) {
  return (array ? array[0] : undefined);
};

const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

assertE(head([5,6,7]), 5);
assertE(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertE(head(), undefined);
assertE(head(["Hello"]), "Hello");