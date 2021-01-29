const findKey = (object, cb) => {
  for (let key in object) {
    if (cb(object[key])) {
      return key;
    }
  }
};

const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

let result1 = findKey(object1, x => x.stars === 2)
let result2 = findKey(object1, x => x.stars === 4)
let result3 = findKey(object1, x => x.stars === 1)
let result4 = findKey(object1, x => x.stars === 3)

assertE(result1, "noma");
assertE(result2, undefined);
assertE(result3, "Blue Hill");
assertE(result4, "Akaleri");

