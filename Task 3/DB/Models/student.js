const mongoose = require('mongoose')

const conn1 = require('../connection/conn1')

const student = mongoose.Schema({
    StudentName:String,
    Branch:String,
    Year:Number
}) 

const students = conn1.model('students',student)
module.exports = students;