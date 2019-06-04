const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[enviornment]
const connection = require('knex')(config)

module.exports = {
    getCards,

}

function getCards ()