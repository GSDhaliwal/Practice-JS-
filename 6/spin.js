//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spin = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];

for (let rotation = 0; rotation < spin.length; rotation++) {
  setTimeout(() => {
    process.stdout.write(spin[rotation]);
  }, (100 * rotation));
};

setTimeout(() => {
  process.stdout.write('\n');
}, (100 * spin.length) + 100);