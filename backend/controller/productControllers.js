const Product = require ('../models/Product');

const getAllProducts = (req, res) =>{
    Product.find({})
    .then((products)=>{
        res.json(products)
    })
    .catch(err=>{
        console.error(err);
        res.status(500).json({message:'Server error'})
    })
}

const getProductById = (req, res) =>{
    Product.findById(req.params.id)
    .then((product)=>{
        res.json(product)
    })
    .catch(err=>{
        console.error(err);
        res.status(500).json({message:'Server error'})
    })
}


module.exports = {
    getAllProducts,
    getProductById
}