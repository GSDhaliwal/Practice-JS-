function sumToOne(n) {
  let sum = 0;
  sum += n;
  n--;
  if (n !== 0) {
    sum += sumToOne(n)
  }
  return sum;
}

console.log(sumToOne(5));