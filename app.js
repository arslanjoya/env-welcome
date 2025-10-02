const http = require('http');

const ENV = process.env.ENV || 'dev';
const port = ENV === 'prod' ? 3001 : 3000;
const message = ENV === 'prod' ? 'Welcome to Prod Env.' : 'Welcome to Dev Env.';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`${message}\n`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port} (${ENV} environment)`);
});

// CI test change
console.log("This is a test for GitHub Actions CI workflow");
