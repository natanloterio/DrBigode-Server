let USERS = require('../../../db/memory/users') // DB
let makeStudent = require('../../../models/user/index') // model
let serialize = require('./serializer') // serializer custom to db

let listUsers = () => {
  return Promise.resolve(serialize(USERS))
}

let findUser = (prop, val) => {
  if (prop === 'id') { prop = 'serial' }
  let student = USERS.find(student => student[prop] == val)
  return Promise.resolve(serialize(student))
}

let findUsersBy = (prop, val) => {
  if (prop === 'grade') {prop = 'year'}
  let student = USERS.filter(student => student[prop] == val)
  return Promise.resolve(serialize(student))
}

let addUser = (studentInfo) => {
  let student = makeStudent(studentInfo)
  let newStudent = {
    serial: USERS.length + 1,
    year: student.getGrade(),
    name: student.getName(),
    age: student.getAge(),
    prefect: student.isPrefect()
  }
  USERS.push(newStudent)
  return findUser('serial', newStudent.serial)
}

let deleteUser = (id) => {
  return findUser({id})
    .then(student => {
      if (student.id == id) {
        USERS = USERS.filter(student => student.serial != id)
        return {
          id,
          status: 'success'
        }
      }
      return {
        status: 'fail'
      }
    })
}

let dropAll = () => {
  USERS = [];
  return USERS;
}

module.exports = { 
  listUsers,
  findUser,
  findUsersBy,
  addUser,
  deleteUser,
  dropAll
}
