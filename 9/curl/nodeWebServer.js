/*
let http = require('http');

let server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(3000);
*/

let request = require('request');

request('http://www.google.com', (error, response, body) => {
  console.log(response)
})