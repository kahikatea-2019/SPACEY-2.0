const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')('config')

module.exports = {
  userExists,
  getUserbyId,
  getUserByName
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserbyId (id, db = connection) {
  return db('users')
    .select('id', 'username')
    .where('id', id)
    .first()
}

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('username', username)
    .first
}
