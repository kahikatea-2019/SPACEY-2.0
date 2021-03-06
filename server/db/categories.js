const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
addCategory,
getCategrory
}

function addCategory (newCategory db = connection) {
  return db('categories')
    .insert(newCategory)
    .then(() => db('categories').select())
}

function getCategory (id , db = connection) {
  return db('categories')
  .where('userId', id)
  .first()
}

function deleteCategory (id, db = connection) {
  return db('categories')
  .where('id', id)
  .del()
}
