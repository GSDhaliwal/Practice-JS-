const tail = function(array) {
  let result;
  
  if (array) {
    result = array.slice(1);
  } else {
    result = [];
  }
  
  return result;
};

const assertE = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};


//TESTS

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertE(result.length, 2); // ensure we get back two elements
assertE(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertE(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertE(words.length, 3); // original array should still have 3 elements!

console.log(tail([]))