const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Create an array to store messages
const messages = [];

// Define a route to handle GET requests to /messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Define a route to handle POST requests to /messages
app.post('/messages', (req, res) => {
  const receivedMessages = Array.isArray(req.body) ? req.body : [req.body]; // Convert single object to array if necessary
  messages.push(...receivedMessages); // Spread operator to push individual messages to the array
  res.status(201).json({ success: true, message: 'Messages received' });
});

// Start the server and listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




/*const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Create an array to store messages
const messages = [];

// Define a route to handle GET requests to /messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Define a route to handle POST requests to /messages
app.post('/messages', (req, res) => {
  const { message } = req.body;
  messages.push(message);
  res.status(201).json({ success: true, message: 'Message received' });
});

// Start the server and listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});*/