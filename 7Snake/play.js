const { connect } = require("./client");

const handleUserInput = (data) => {
  // \u0003 maps to ctrl+c input
  if (data === '\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true)
       .setEncoding("utf8")
       .resume()
       .on("data", handleUserInput)
  return stdin;
};



console.log("Connecting ...");
connect();
setupInput();