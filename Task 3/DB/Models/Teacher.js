const mongoose = require('mongoose')

const conn2 = require('../connection/conn2')

const teacher = mongoose.Schema({
    TeacherName:String,
    Department:String,
    JoinYear:Number
}) 

const teachers = conn2.model('teachers',teacher)
module.exports = teachers;