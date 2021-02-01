function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let element = 0;
  
  return function() {
    let nextNumber = list[element];
    element += 1;
    return Math.floor(Math.random() + 1) * nextNumber;
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

