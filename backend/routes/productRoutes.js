const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById} = require('../controller/productControllers')

/////GET ALL PRODUCTS FROM DB////
////get /api/products
////public///////
router.get('/', getAllProducts)

/////GET  PRODUCT by id FROM DB////
////get /api/products/:id
////public///////
router.get('/:id', getProductById)


module.exports=router