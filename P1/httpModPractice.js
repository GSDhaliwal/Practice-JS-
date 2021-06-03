const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function(request, response) {
  console.log('In requestHandler'); // NEW LINE
  if (request.url === '/') response.end("Welcome");
  if (request.url === '/urls') response.end("http://www.google.ca");
  if (request.statusCode === 404) response.end('404 Page Not Found');
};

const server = http.createServer(requestHandler);
console.log('Server created'); // NEW LINE

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

console.log('Last line (after .listen call)'); // NEW LINE