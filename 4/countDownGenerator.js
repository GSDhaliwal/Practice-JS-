const countdownGenerator = function (x) {
  let time = x;

  return () => {
    let timeLeft = time;
    time -= 1;
    if (timeLeft > 0) {
      console.log(`T-minus ${timeLeft}`);
    };
    if (timeLeft === 0) {
      console.log(`Blast Off!`);
    };
    if (timeLeft < 0) {
      console.log(`Rockets already gone, bub!`);
    };
  };  
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!