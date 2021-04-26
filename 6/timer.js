let myTimer = process.argv.slice(2);

if (myTimer) {
  for (let time of myTimer) {
    if (Number(time) >= 0 && typeof Number(time) === 'number') {
      setTimeout(() => {process.stdout.write('\x07');}, (Number(time) * 1000))
    }
  }
}