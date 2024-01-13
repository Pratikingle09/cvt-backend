const getAllProducts=(req,res)=>{
    res.json({message:[]})
}

const createAProduct=(req,res)=>{
    res.json({message:"new product created"})
}

module.exports={getAllProducts,createAProduct}