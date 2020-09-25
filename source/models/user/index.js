let buildMakeStudent = require('./users')
let studentSchema = require('./user-schema')
// let {studentValidator} = require('../../validator')
let studentValidator = require('../validator/')(studentSchema)

let makeStudent = buildMakeStudent(studentValidator)

module.exports = makeStudent

