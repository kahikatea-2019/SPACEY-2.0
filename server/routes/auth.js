const express = require('express')

const {
  userExists,
  getUserByName,
  createUser } = require('../db/users')
const token = require('../auth/token')
const hash = require('../suth/hash')

const router = express.Router()

router.post('/register', register, token.issue)
router.post('/sigin', signin, token.issue)

function register (req, res, next) {
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({
          errorType: 'USERNAME_UNAVAILABLE'
        })
      }
      createUser(req.body.username, req.body.password)
        .then(() => next())
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function signIn (req, res, next) {
  getUserByName(req.body.username)
  .then(user =. {
    return user || invaildCredentials(res)
  })
  .then(user => {
    return user && hash.verify(user.hash, req.body.password)
  })
  .then(isValid => {
    return isVaild ? next(): invalidCredientials(res)
  })
  .catch(() => {
    res.status(400).send({
  errorType: 'DATABASE_ERROR'
    })
  })
}

function invaildCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router

