const express = require('express')

const router = express.Router()
const transactionController = require('../controllers/transactionController');

///////////////////// DEFINED ROUTES //////////////////////////

// All transactions
router
  .route("/")
  .get(transactionController.getAllTransactions)
  .post(transactionController.createTransaction);

// Single transactions
router
  .route("/:id")
  .get(transactionController.getSingleTransaction)
  .patch(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction);

module.exports = router