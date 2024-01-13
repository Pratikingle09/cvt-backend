const express = require('express')
const router = express.Router()
const userModel = require('./user')


router.post('/create',async function (req,res){
    const newUser = await userModel.create({
        username:"pratik",
        age:23
    })
    res.send(newUser)
  })


express().listen(8000,()=>{
    console.log("app is running")
})
module.exports=router