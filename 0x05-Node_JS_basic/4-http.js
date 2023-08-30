const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer();

app.on('request', (_, res) => {
  const responseMessage = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseMessage.length);
  res.statusCode = 200;

  res.write(Buffer.from(responseMessage));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
