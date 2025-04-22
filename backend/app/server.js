require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');  // PostgreSQL client
const server = express();
const transactionsRouter = require('./routes/transactionRoutes');

// Set up PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.PG_DB_CONNECTION_STRING,  // Your PostgreSQL connection string from .env
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Error connecting to PostgreSQL: ", err));

// Body parser middleware
server.use(express.json()); // allows the server to accept JSON as a body

// Define routes
server.use('/api/transactions', transactionsRouter);

// Start the server
const port = process.env.DB_PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
