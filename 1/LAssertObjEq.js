const { eqObj } = require('./index');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  return (eqObj(actual, expected) === true ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
};

module.exports = assertObjectsEqual;
