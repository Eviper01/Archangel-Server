const http = require('http');
const spawn = require('child_process');

const hostname = '127.0.0.1';
const port = 25444;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  Ping();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function Ping() {
console.log("yeets");
spawn.exec('wakeonlan -i 100.98.47.255 2C:F0:5D:07:CD:40');

}
