const express = require('express')
const route = express.Router()
const users = require('../DB/userModel')

route.get('/upcloud/users',async (req,res)=>{
    const user = await users.find({},{
        userName:1,
        age:1,
        email:1
    });

    res.render('index',{user})
})

route.post('/upcloud/userreg',async (req,res)=>{

    
    const {userName,age,email,address,income,martialStatus,registrationNumber,registrationDate} = req.body;  
     console.log(age)
    const user =  new users({userName,age,email,address,income,martialStatus,registrationNumber,registrationDate})

    const SaveData = await user.save()
    if(SaveData) console.log(SaveData)
    else console.log('notSaved')
})


module.exports = route;