const assert = require('chai').assert;

const assertE = require('../LAssertE')
const head = require('../LHead')
const tail = require('../LTail')
const eqArr = require('../LEqArr')
const assertArrEq = require('../LAssertArrEq')
const mid = require('../LMid')

/*
console.log('====')
console.log('assertE')
console.log('====')
assertE("Lighthouse Labs", "Bootcamp");
assertE(1, 12);
assertE("Lighthouse Labs", "Lighthouse Labs");
assertE(1, 1);

console.log('====')
console.log('head')
console.log('====')
assertE(head([5,6,7]), 5);
assertE(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertE(head(), undefined);
assertE(head(["Hello"]), "Hello");

console.log('====')
console.log('tail')
console.log('====')
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertE(result.length, 2); // ensure we get back two elements
assertE(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertE(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertE(words.length, 3); // original array should still have 3 elements!


console.log('====')
console.log('eqArr')
console.log('====')
assertE(eqArr([1, 2, 3], [1, 2, 3]), true); // => true
assertE(eqArr([1, 2, 3], [3, 2, 1]), false);// => false
assertE(eqArr(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertE(eqArr(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertE(eqArr([1, 2, 3], [1, 2, 3]), false); // => false
assertE(eqArr([1, 2, 3], [3, 2, 1]), true);// => false

assertE(eqArr([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertE(eqArr([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertE(eqArr([[2, 3], [4]], [[2, 3], 4]), false) // => false


console.log('====')
console.log('assertArrEq')
console.log('====')
assertArrEq([1, 2, 3], [1, 2, 3]);
assertArrEq([1, 2, 3], [3, 2, 1]);
assertArrEq(["1", "2", "3"], ["1", "2", "3"]);
assertArrEq(["1", "2", "3"], ["1", "2", 3]);


console.log('====')
console.log('mid')
console.log('====')
assertArrEq([], mid([1])); //PASS
assertArrEq([], mid([1, 2])); //Pass
assertArrEq([2], mid([1, 2, 3])); //PASS
assertArrEq([3], mid([1, 2, 3, 4, 5])); //pass
assertArrEq([2, 3], mid([1, 2, 3, 4])); //PASS
assertArrEq([3, 4], mid([1, 2, 3, 4, 5, 6])); //pass

assertArrEq([1], mid([1])); //fail
assertArrEq([1], mid([1, 2])); //fail
assertArrEq([1], mid([1, 2, 3])); //fail
assertArrEq([5], mid([1, 2, 3, 4, 5])); //fail
assertArrEq([3], mid([1, 2, 3, 4])); //fail
assertArrEq([4, 2], mid([1, 2, 3, 4, 5, 6])); //fail
*/

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("does not return '5' for ['6']", () => {
    assert.strictEqual(head(['6']), '6'); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns [] when empty", () => {
    assert.strictEqual(head([]));
  });
  it("does not return 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});