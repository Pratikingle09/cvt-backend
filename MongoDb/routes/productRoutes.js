const express = require('express')
const { route } = require('./userRoutes')
const {getAllProducts,createAProduct}=require('../controllers/productController')
const router = express.Router()

router.get('/',createAProduct)
module.exports=router