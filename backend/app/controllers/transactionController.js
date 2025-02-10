const transactionService = require('../services/transactionService');

const createTransaction =  async (req, res) => {
  try {
    const transactionData = req.body;
    const newTransaction = await transactionService.createTransaction(transactionData);
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const getSingleTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await transactionService.getSingleTransaction(id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedTransaction = await transactionService.updateTransaction(id, updateData);
    
    if (updatedTransaction) {
      res.status(200).json(updatedTransaction);
    } else {
      res.status(404).json({ message: 'Transaction not found for update' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTransaction = await transactionService.deleteTransaction(id);

    if (deletedTransaction) {
      res.status(200).json({ message: 'Transaction deleted successfully' });
    } else {
      res.status(404).json({ message: 'Transaction not found for deletion' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
  getSingleTransaction,
  updateTransaction,
  deleteTransaction,
};