const express = require('express')
const router = express.Router()

const users = require('./users')

router
  .get('/users', users.index)
  .get('/users/:id', users.show)
  .post('/users', users.create)



module.exports = router