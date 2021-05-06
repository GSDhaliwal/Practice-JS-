const request = require("request");
const fs = require("fs");
let myArgs = process.argv.slice(2);

request(myArgs[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  if (!error) {
    fs.writeFile(myArgs[1], body, 'utf8', (err) => {
      console.log(`Downloaded and saved ${body.length} bytes to ${myArgs[1]}`)
    })
  };
});