const mongoose = require('mongoose')

const conn1 = mongoose.createConnection('mongodb://localhost/Student')

 module.exports = conn1;