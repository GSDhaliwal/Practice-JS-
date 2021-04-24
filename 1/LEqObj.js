const assertE = require('./LAssertE');
const eqArr = require('./LEqArr');

const eqObj = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (typeof object1[key] === "object" && object2[key]) {
      let recursionResult = eqObj(object1[key], object2[key]);
      recursionResult 
      if (!recursionResult) {
          return false;
        }
      } else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    } else if (eqArr(object1[key], object2[key]) === false) {
      return false;
    }
  }
  return true;
};

module.exports = eqObj;
/*
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

assertE(eqObj({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true
assertE(eqObj({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => true
assertE(eqObj({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => true
assertE(eqObj({ a: { y: 0, z: 1 }, b: 2 }, { b: 2, a: { y: 0, z: 1 }}), true) // => true

assertE(eqObj({ a: { y: 0, z: { q: 1, f: 3 }}, b: 2 }, { b: 2, a: { z: { q: 1, f: 3 }, y: 0 }}), true) // => true
assertE(eqObj({ a: { y: 0, z: { q: 1, f: 3 }}, b: 2 }, { b: 2, a: { z: { q: 1, f: 3 }, y: 1 }}), false) // => true
*/