const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const sampleMiddleware = require('./middlewares/sampleMiddleware')
const db = require('./config/mongodb');
const app = express()
const port = 8000

// this middleware will help me parse the data coming in request obj
app.use(express.json());
app.use(cors());
app.use(sampleMiddleware);
// 2 different types of routes....
// i. users routes
// ii. products routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);


app.get('/', (req,res)=>{
    res.send('Welcome to the server!')
});

app.listen(port, () => {
  console.log(`🔥 Example app listening on port ${port}`)
})