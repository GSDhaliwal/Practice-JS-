//Load HTTP module
const port = 3000;

const { response } = require('express');
/*
//SET UP SERVER VIA HTTP
const http = require("http");
const hostname = '127.0.0.1';
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

//SET UP SERVER VIA EXPRESS
const express = require('express');
const app = express();

//Create a server on local host

app.get('/', (request, response) => response.send("Hello World"));

app.get('/parks', (req, res) => res.send("The Parks You've Seen"));

app.listen(port, () => console.log("Server running"));