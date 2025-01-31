const express = require('express')

const router = express.Router()
const Transactions = require('../models/Transactions')

// defined routes

// post transactions
router.post('/', async (req, res) => {
  try {
    const transaction = new Transactions({
      description: req.body.description

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

    res.json(transactions);
  }catch (err) {
    res.status(500).json({message : err.message})
  }
})

// put transactions
router.patch('/:id', async (req, res) => {
    try {
      const transaction = await Transactions.findById(req.params.id);
      if(!transaction) return res.status(404).json({message: 'Transaction not found!'})
      
      await transaction.save();

     res.json(transaction)
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