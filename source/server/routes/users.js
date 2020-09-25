let usersDb = require('../../data-access/users-db')

let user = module.exports = {}

user.index = (req, res, next) => {
  usersDb.listUsers()
    .then(data => {
      res.send(data)
    })
}

user.show = (req, res, next) => {
  // studentsDb.findStudent('id', req.params.id)
  //   .then(data => {
  //     res.send(data)
  //   })
}

user.create = (req, res, next) => {
  usersDb.addU(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}