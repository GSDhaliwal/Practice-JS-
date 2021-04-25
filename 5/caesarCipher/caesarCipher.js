const encrypt = function(plaintext, key) {
  let cipheredResult = "";
  for (let text = 0; text < plaintext.length; text++) {
    if (plaintext.charCodeAt(plaintext[text]) >= 97 && plaintext.charCodeAt(plaintext[text]) <= 122){
      if (typeof key[0] !== "integer") {
        if (plaintext.charCodeAt(plaintext[text]) + key < 97 ) {
          let numbersToLoopAround = 97 - (plaintext.charCodeAt(plaintext[text]) + key)
          cipheredResult += String.fromCharCode(123 - numbersToLoopAround);
        } else if (plaintext.charCodeAt(plaintext[text]) + key > 97) {
          cipheredResult += String.fromCharCode(plaintext.charCodeAt(plaintext[text]) + key);
        };
      } else {      
        if (plaintext.charCodeAt(plaintext[text]) + key > 122 ) {
          let numbersToLoopAround = (plaintext.charCodeAt(plaintext[text]) + key) - 122;
          cipheredResult += String.fromCharCode(96 + numbersToLoopAround);
        } else if (plaintext.charCodeAt(plaintext[text]) + key < 122) {
          cipheredResult += String.fromCharCode(plaintext.charCodeAt(plaintext[text]) + key);
        };
      };
    } else {
      cipheredResult += plaintext[text];
    }
  }
  return cipheredResult;
};

module.exports = { encrypt };