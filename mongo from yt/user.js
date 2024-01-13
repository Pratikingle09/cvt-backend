const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/new").then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})
const userSchima = mongoose.Schema({
    username:String,
    age:Number
})

module.exports=mongoose.model("user",userSchima)