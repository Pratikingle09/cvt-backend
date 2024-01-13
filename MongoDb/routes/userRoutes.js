const express = require('express')
const router = express.Router()
const {getAllUsers,createAUser}=require('../controllers/userController')
router.get('/',getAllUsers)
router.post('/',createAUser)
module.exports=router;