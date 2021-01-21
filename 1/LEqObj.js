const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const eqArr = function(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (array1.length !== array2.length || array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
};


const eqObj = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    } else if (eqArr(object1[key], object2[key]) === false) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertE(eqObj(ab, ba), true); //true
assertE(eqObj(ab, abc), false); //true
assertE(eqObj(cd, dc), true); //true
assertE(eqObj(cd, cd2), true); //false