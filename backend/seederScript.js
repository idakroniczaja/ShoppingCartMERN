require ('dotenv').config();
require ('./config/db');
const mongoose = require("mongoose")
const productsData = require('./data/products');
const Product = require ('./models/Product')


//////////////FOR ASYNC//////////////

// const connectDB = require ('./config/db');
// connectDB();

// const importData = async () => {
//     try {
//         await Product.deleteMany({});
//         await Product.insertMany(productsData);
//         console.log('Data import success');
//         process.exit();
//     } catch(error){
//         console.error('Error with data import');
//         process.exit(1);
//     }
// } ;



    Product.deleteMany({})
    .then(()=>{
        Product.insertMany(productsData)
        .then((products)=>{
            console.log('Data import success');
            process.exit();
        })
    }).catch(error=>{
        console.error('Error with data import');
        process.exit(1);
    })
  

