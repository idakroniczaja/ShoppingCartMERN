
require('dotenv').config();


const express = require ('express');
const productRoutes = require('./routes/productRoutes')

///FOR ASYNC/////
// const connectDB = require('./config/db');
// connectDB();

////FOR SYNC//////
 require('./config/db');

const app = express();


//CREATE ROUTES
app.use(express.json());
app.use('/api/products', productRoutes);






const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))


module.exports = app