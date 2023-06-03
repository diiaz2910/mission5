const express = require('express');

// Create an instance of Express server
const app = express();

// Define a route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server and listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
