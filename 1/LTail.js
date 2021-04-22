const assertE = require('./LAssertE')

const tail = function(array) {
  let result;
  
  if (array) {
    result = array.slice(1);
  } else {
    result = [];
  }
  
  return result;
};
 module.exports = tail;


//TESTS
