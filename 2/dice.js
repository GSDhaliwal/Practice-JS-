const diceRoller = function (numberOfDice) {
  let rolledOutput = "Rolled " + numberOfDice + " dice: ";

  for (let dice = 0; dice < numberOfDice; dice++) {
    (dice === numberOfDice - 1) ? rolledOutput += Math.ceil((Math.random() * 6)) : rolledOutput += Math.ceil(Math.random() * 6) + ", ";
  }

  return rolledOutput;
}

console.log(diceRoller(process.argv[2]));