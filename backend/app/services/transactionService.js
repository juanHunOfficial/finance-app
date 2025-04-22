// services/transactionService.js
const client = require('../db'); // Import the database client

// Create a new transaction
const createTransaction = async (transactionData) => {
  const { description, amount, date } = transactionData;

  try {
    // Insert into PostgreSQL
    const result = await client.query(
      'INSERT INTO transactions (description, amount, date) VALUES ($1, $2, $3) RETURNING *',
      [description, amount, date]
    );
    return result.rows[0]; // Return the inserted row
  } catch (err) {
    throw new Error('Error creating transaction: ' + err.message);
  }
};

// Get all transactions
const getAllTransactions = async () => {
  try {
    const result = await client.query('SELECT * FROM transactions');
    return result.rows; // Return all transactions
  } catch (err) {
    throw new Error('Error fetching all transactions: ' + err.message);
  }
};

// Get a single transaction by ID
const getSingleTransaction = async (id) => {
  try {
    const result = await client.query('SELECT * FROM transactions WHERE id = $1', [id]);
    return result.rows[0]; // Return the found transaction
  } catch (err) {
    throw new Error('Error fetching transaction by ID: ' + err.message);
  }
};

// Update a transaction
const updateTransaction = async (id, updateData) => {
  const { description, amount, date } = updateData;
  try {
    const result = await client.query(
      'UPDATE transactions SET description = $1, amount = $2, date = $3 WHERE id = $4 RETURNING *',
      [description, amount, date, id]
    );
    return result.rows[0]; // Return updated transaction
  } catch (err) {
    throw new Error('Error updating transaction: ' + err.message);
  }
};

// Delete a transaction
const deleteTransaction = async (id) => {
  try {
    const result = await client.query('DELETE FROM transactions WHERE id = $1 RETURNING *', [id]);
    return result.rows[0]; // Return deleted transaction
  } catch (err) {
    throw new Error('Error deleting transaction: ' + err.message);
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
  getSingleTransaction,
  updateTransaction,
  deleteTransaction,
};
