let creditLimit = 0;

/*
 * Input: number of dollars to loan out
 * Returns: Promise of loan which may or may not fulfill, based on remaining credit. 
 * If creditLimit is less than the requested amount, only the remaining limit is loaned out, otherwise the full amount is loaned out. If $0 remain in the limit, the loan request is rejected (error!).
 */
const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject('Insufficient funds')
    }
    if (creditLimit >= amount) {
      creditLimit -= amount;
      resolve(amount)
    } else {
      let fundsGiven = creditLimit;
      creditLimit = 0;
      resolve(fundsGiven)
    }
  });
};

console.log("Asking for $6000");

loanOut(6000)
  .then((amountReceived) => console.log(`\t-> I got $${amountReceived} from the bank! My remaining credit is $${creditLimit}`))
  .catch((error) => console.log(`\t-> Error: ${error}`))