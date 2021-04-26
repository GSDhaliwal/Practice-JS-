const sentence = "hello there from lighthouse labs";

for (let char = 0; char < sentence.length; char++) {
  setTimeout(() => {
    process.stdout.write(sentence[char])
  }, (50 * char))
}

setTimeout(() => {process.stdout.write('\n')}, (50 * (sentence.length + 1)))