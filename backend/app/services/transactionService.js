const Transaction = require('../models/transaction');

const createTransaction = async (transactionData) => {
  try {
    const transaction = new Transaction(transactionData);
    return await transaction.save();
  } catch (err) {
    throw new Error('Error creating transaction: ' + err.message);
  }
};

const getAllTransactions = async () => {
  try {
    const transactions = await Transaction.find();
    const filteredTransactions = transactions.map(transaction => {
      // must be converted to a plain JS object to modify it
      const transactionObject = transaction.toObject();
      transactionObject.amount = parseFloat(transactionObject.amount.toString());
      return transactionObject;
    });
    return filteredTransactions
  } catch (err) {
    throw new Error('Error fetching all transactions: ' + err.message);
  }
};

const getSingleTransaction = async (id) => {
  try {
    return await Transaction.findById(id);
  } catch (err) {
    throw new Error('Error fetching transaction by ID: '+ err.message);
  }
};

const updateTransaction = async (id, updateData) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(id, updateData, {
      new: true, // returns the updated transaction
    });
    return transaction;
  } catch (err) {
    throw new Error('Error updating transaction: ' + err.message);
  }
};

const deleteTransaction = async (id) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(id);
    return transaction;
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