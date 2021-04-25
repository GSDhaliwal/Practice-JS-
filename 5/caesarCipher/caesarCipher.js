const encrypt = function(plaintext, key) {
  let cipheredResult = "";
  for (let text = 0; text < plaintext.length; text++) {
    if (plaintext.charCodeAt(text) >= 97 && plaintext.charCodeAt(text) <= 122){
      if (plaintext.charCodeAt(text) + key < 97 ) {
        let numbersToLoopAround = 97 - (plaintext.charCodeAt(text) + key)
        cipheredResult += String.fromCharCode(123 - numbersToLoopAround);
      } else if (plaintext.charCodeAt(text) + key > 122 ) {
        let numbersToLoopAround = (plaintext.charCodeAt(text) + key) - 122;
        cipheredResult += String.fromCharCode(96 + numbersToLoopAround);
      } else {
        cipheredResult += String.fromCharCode(plaintext.charCodeAt(text) + key);
        };
    } else {
      cipheredResult += plaintext[text];
    }
  }
  return cipheredResult;
};

module.exports = { encrypt };