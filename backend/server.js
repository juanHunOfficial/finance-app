require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const transactionsRouter = require('./routes/transactions');

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB: ", err));

// body-parser middleware
server.use(express.json());

server.use('/transactions', transactionsRouter);

// defined routes
const port = process.env.DB_PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});