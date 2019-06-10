const express = require('express')
const db = require('../db/categories')
const router = express.Router()

router.get('/', (req, res) => {
  db.getCategories()
    .then(categories => {
      res.send(categories)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get()