const mongoose = require('mongoose')

const db  = async ()=>{
    const s = await mongoose.connect('mongodb://localhost/user');
    if(s) console.log("happily connected")

}
db()

module.exports = db;


