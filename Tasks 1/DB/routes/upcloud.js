const express = require('express')
const route = express.Router()

route.get('/upcloud/users',async (req,res)=>{
    const user = await users.find({},{
        userName:1,
        age:1,
        email:1
    });

    res.send({user})
})

route.post('/api',async (req,res)=>{

    
    const {userName,age,email,address,income,martialStatus,registrationNumber,registrationDate} = req.body;  
     console.log(age)
    const user =  new users({userName,age,email,address,income,martialStatus,registrationNumber,registrationDate})

    const SaveData = await user.save()
    if(SaveData) console.log(SaveData)
    else console.log('notSaved')
})

module.exports = route