const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const count = function(allItems, itemsToCount) {
  let totalCount = {};

    for (let item of allItems) {
      if (itemsToCount[item]) {
        if (totalCount[item]) {
          totalCount[item] += 1;
        } else {
          totalCount[item] = 1;
        }
      }
    }
  
  return totalCount;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = count(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertE(result1["Jason"], 1);
assertE(result1["Karima"], undefined);
assertE(result1["Fang"], 2);
assertE(result1["Agouhanna"], undefined);