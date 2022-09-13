const mongoose = require('mongoose')
require('./dbConnection')

// user like name, age, email, address, income,Marital Status, registration number and  registration date

const user  = mongoose.Schema({
     userName:{
        type:String,
        required:true
     },
     age:{
        type:Number,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     address:{
        type:String,
        required:true
     },
     income:{
        type:Number,
        required:true
     },
     martialStatus:{
        type:String,
        required:true
     },
     registrationNumber:{
        type:Number,
        required:true
     },
     registrationDate:{
        type:String,
        required:true
     }
})

const users = mongoose.model('user',user);

module.exports = users



// income,Marital Status, registration number and  registration date