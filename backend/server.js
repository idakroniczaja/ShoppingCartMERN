
require('dotenv').config();

const express = require ('express');

///FOR ASYNC/////
//const connectDB = require('./config/db');
//connectDB();

////FOR SYNC//////
require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))