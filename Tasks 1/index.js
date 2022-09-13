const express = require("express")
const mongoose = require("mongoose")
const users = require('./model/user')
const nodemailer = require('nodemailer');



const app = express();

mongoose.connect('mongodb://localhost:27017/Task1')
.then((db)=>{
  console.log("sucess")
}).catch((err)=>{
  console.log(err)
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/',async(req,res)=>{
     const {username,password,email} = req.body;
     const transporter = await nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:'ashutoshm610@gmail.com',
            pass:'qxefhjncsfjqixzj'
        }

     })

     const options = {
        from:"ashutoshm610@gmail.com",
        to:email,
        subject:"verification mail",
        text:"This mail checks of verification"
     }
     
     transporter.sendMail(options,async(err,info)=>{
        if(info){
         const user = new users(req.body);
         await user.save(); 
        }
        else console.log("err");
     })
})

app.get('/api/user',async(req,res)=>{
   const user = await users.find();
   res.send(user)
   return
})




app.listen(3000,()=>{
    console.log("app running on 3000");
})