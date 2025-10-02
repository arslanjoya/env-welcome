const express = require('express');
const path = require('path');

function createApp(envName, port) {
  const app = express();

  app.use('/static', express.static(path.join(__dirname, 'public')));

  app.get('/', (req, res) => {
    res.send(`
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Welcome</title>
      </head>
      <body>
        <h1>Welcome to ${envName} environment</h1>
        <p>Server running on port ${port}</p>
      </body>
      </html>
    `);
  });

  app.get('/health', (req, res) => res.json({ status: 'ok', env: envName }));

  app.listen(port, () => {
    console.log(`App running on port ${port} (${envName})`);
  });
}

// Start dev on 3000
createApp('dev', 3000);

// Start prod on 3001
createApp('prod', 3001);
