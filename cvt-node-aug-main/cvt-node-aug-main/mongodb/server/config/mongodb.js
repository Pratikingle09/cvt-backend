const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://pratikingle66:Pratik123@cluster0.exm1ek1.mongodb.net").then(()=>{
    console.log('⚡️⚡️⚡️ Connected to the db ⚡️⚡️⚡️')
}).catch((err)=>{
    console.log('error connecting to the db', err)
});

module.exports = db;