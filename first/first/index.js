const express=require('express')
const app = express()


app.use(express.static('./public'))
app.set("view engin","ejs")

app.get('/',(req,res)=>{
    res.render('index.ejs')
})




app.listen(8000)