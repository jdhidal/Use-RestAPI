// Import Express
const express = require('express');

// Create an instance of Express
const app = express();

// Middleware to parse the request body in JSON format
app.use(express.json());

// Test endpoint: GET /hello
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`REST API listening on port ${PORT}`);
});
