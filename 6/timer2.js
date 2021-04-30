const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key === '\u0003') {    // \u0003 maps to ctrl+c input
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');},
      (Number(key) * 1000))    
  }
});