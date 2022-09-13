const express = require('express');
const upcloud  = require('./routes/upcloud.js')


require('./DB/dbConnection')

const app = express();
app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

app.use('/api',upcloud)


app.listen(3000,()=>{
    console.log("sever running")
})