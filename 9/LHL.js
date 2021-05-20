
class Account {
  constructor(user) {
    this.user = user;
    //balance starts at $0 to initiate new account
    this.transaction = [0];
  }

  get balance () {
    return this.transaction.reduce((a, b) => a + b, 0);
  }

  addTransaction(transaction) {
    this.transaction.push(transaction);
  }
}



class Transaction {
  constructor(amount, account) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this.value);
    }
  }
}




class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

  isAllowed() {
    // deposits always allowed thanks to capitalism.
    return true;
  }
}




class Withdrawal extends Transaction {
  get value () {
    return -this.amount;
  }

  isAllowed() {
    // note how it has access to this.account b/c of parent
    return (this.account.balance - this.amount >= 0);
  }
}



const myAccount = new Account('GSD');

t1 = new Deposit(500, myAccount)
t1.commit();

t2 = new Withdrawal(600, myAccount);
t2.commit();

console.log(t1)
console.log(myAccount.transaction)

console.log('Balance:', myAccount.balance);