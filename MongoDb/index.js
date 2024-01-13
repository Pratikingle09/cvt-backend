const express = require('express')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const app = express()
const port=5000;

 app.get('/',(req,res)=>{
     res.send("Welcome to the server")
 })
app.use('/users',userRoutes)
app.use('/products',productRoutes)
app.listen(port,()=>{
    console.log(`app listning to ${port} port`)
})