const express = require('express')

const router = express.Router()
const {
  getAllTransactions,
  createTransaction,
  getSingleTransaction,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactionController');

///////////////////// DEFINED ROUTES //////////////////////////

// All transactions
router
  .route("/")
  .get(getAllTransactions)
  .post(createTransaction);

// Single transactions
router
  .route("/:id")
  .get(getSingleTransaction)
  .patch(updateTransaction)
  .delete(deleteTransaction);

module.exports = router