const express = require('express')
const db = require('../db/cards')
const router  = express.Router()

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.getCard(id)
    .then(card => res.send(card))
    .catch(err => res.status(500).send(err.message))
})

router.post('/', (req, res) => {
    
})