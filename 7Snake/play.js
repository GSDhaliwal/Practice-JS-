const { connect } = require("./client");
const { setupInput } = require('./userInput');

console.log("Connecting ...");

setupInput(connect());