const mongoose = require('mongoose')

const conn2 = mongoose.createConnection('mongodb://localhost/Teacher')

 module.exports = conn2;