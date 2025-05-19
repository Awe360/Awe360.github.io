const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// GET request handler
app.get('/', (req, res) => {
  res.send('Hello from GET request!');
});

// POST request handler
app.post('/', (req, res) => {
  const data = req.body;
  res.send(`Received POST data: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
