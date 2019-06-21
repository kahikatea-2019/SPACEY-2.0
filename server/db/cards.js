const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[enviornment]
const connection = require('knex')(config)

module.exports = {
  getCard,
  addCard,
  getCards,
  updateCard

}

function getCard (id, db = connection) {
  return db('cards')
    .where('userId', id)
    .first()
}

function addCard (newCard, db = connection) {
  return db('cards')
    .insert(newCard)
}

function getCards (db = connection) {
  return db('cards')
    .join('categories', 'categories.id', 'cards.categoryId')
    .select('cards.id', 'cards.categoryId', 'cards.id', 'cards.answer', 'cards.dateCreated')
}

function updateCard (updatedCard, db = connection) {
  return db('cards')
    .where('id', updateCard.id)
    .update(updatedCard)
}
