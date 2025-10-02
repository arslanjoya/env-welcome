const express = require('express');
const path = require('path');

const app = express();

// Environment name
const envName = 'prod';
const port = 3001;

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// Homepage
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Prod App</title></head>
      <body style="font-family:sans-serif; text-align:center; margin-top:50px;">
        <h1>Welcome to <span style="color:blue;">${envName}</span> Environment</h1>
        <p>Running on port ${port}</p>
      </body>
    </html>
  `);
});

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', env: envName }));

// Start server on 0.0.0.0 (important for EC2)
app.listen(port, '0.0.0.0', () => {
  console.log(`Prod app running at http://0.0.0.0:${port}`);
});
