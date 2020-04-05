var  http = require('http');
var Server= http.createServer(function (request, response) {
  console.log('requset made' + request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
});

Server.listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8081/');