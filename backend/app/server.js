// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const server = express();
const transactionRouter = require('./routes/transactionRoutes'); // Import transaction routes

// Middleware to parse JSON requests
server.use(express.json());

// Use the routes for transactions
server.use('/api/v1/transactions', transactionRouter);

// Set the port from environment variables or default to 3000
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
