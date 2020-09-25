let {
  listUsers,
  findUser,
  findUsersBy,
  addUser,
  deleteUser,
  dropAll
} 
 = require('./memory/index') // switch out db as required
// = require('./mongod/index')
//= require('./pg/index')


let usersDb = {
  listUsers,
  findUser,
  findUsersBy,
  addUser,
  deleteUser,
  dropAll
}

module.exports = usersDb
