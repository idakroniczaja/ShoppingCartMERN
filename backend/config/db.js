require('dotenv').config();

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/shopping-cart';




/////////////ASYNCHRONOUS///////////////
// const connectDB = async ()=> {
//     try{
//         await mongoose.connect(MONGO_URI, {
//             useCreateIndex: true,
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB connection SUCCESS')
//     }
//     catch (error){
//         console.log('MongoDB connection FAIL');
//         process.exit(1)
//     }
// }

// module.exports = connectDB

///////////SYNCHRONOUS/////////
mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));