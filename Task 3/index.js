const express = require('express');
const students = require('./DB/Models/student');
const teachers = require('./DB/Models/Teacher');

// require('./DB/connection/conn2')
// require('./DB/connection/conn1')




const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.post('/api/upcloud/user',async(req,res)=>{
      const {StudentName,Branch,Year,Department,TeacherName,JoinYear} = req.body;
      console.log(typeof students)
       const stu = new students({StudentName,Branch,Year});
       const Tea = new teachers({TeacherName,Department,JoinYear});
       await stu.save()
       await Tea.save()

       res.send("Done")
})

app.get('/api/upcloud/user',async(req,res)=>{
    const stud = await students.find({},{StudentName:1})
    const Tea = await teachers.find({},{TeacherName:1})
    console.log(stud)
    console.log(Tea)
    res.send("WorkDone")
    return
})


app.listen(3000,()=>{
    console.log("server running on 3000");
})