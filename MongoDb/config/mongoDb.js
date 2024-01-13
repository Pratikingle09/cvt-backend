const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/cvt").then(()=>{
    console.log('⚡️⚡️⚡️ Connected to the db ⚡️⚡️⚡️')
}).catch(()=>{
    console.log('error connecting to the db')
});

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        default:""
    },
    uidi:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model("User",userSchema);