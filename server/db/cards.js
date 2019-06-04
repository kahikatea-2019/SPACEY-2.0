const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[enviornment]
const connection = require('knex')(config)

module.exports = {
    getCard,
    addCard

}

function getCard (id, db = connection) {
    return db('cards')
    .where('userId', id )
    .first()
}

function addCard (newCard, db = connection) {
    return db('cards')
    .insert(newCard)
}

