const express = require('express')

const router = express.Router()
const Transactions = require('../models/Transactions')

// defined routes

// post transactions
router.post('/', async (req, res) => {
  try {
    const transaction = new Transactions({
      description: req.body.description,
      amount: req.body.amount,
      date: req.body.date,
    })
    await transaction.save();
    res.status(201).json(transaction)
  }catch(err){
    res.status(400).json({message: err.message})
  }
})

// get transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transactions.find();

    const filteredTransactions = transactions.map(transaction => {
      // must be converted to a plain JS object to modify it
      const transactionObject = transaction.toObject();
      transactionObject.amount = parseFloat(transactionObject.amount.toString());
      return transactionObject;
    });

    res.json(filteredTransactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// put transactions
router.patch('/:id', async (req, res) => {
    try {
      const transaction = await Transactions.findById(req.params.id);
      
      if(!transaction) return res.status(404).json({message: 'Transaction not found!'})
      //only update if the data for that category is received
      if (req.body.description) {
        transaction.description = req.body.description;
      }
      if (req.body.amount) {
        transaction.amount = req.body.amount;
      }
      if (req.body.date) {
        transaction.date = req.body.date;
      }
      
      await transaction.save();

      res.json({
        description: transaction.description, 
        amount: parseFloat(transaction.amount.toString()), 
        date: transaction.date
      })
    } catch (err) {
      res.status(400).json({message: err.message})
    }
})

// delete transactions
router.delete('/:id', async (req, res) => {
  try {
    const transaction = await Transactions.findById(req.params.id);
    if(!transaction) return res.status(404).json({message: 'Transaction not found!'})
      await transaction.remove();
    res.json({message: 'Transactions deleted!'});
  }catch (err) {
    res.status(500).json({message: err.message})
  }
})

module.exports = router