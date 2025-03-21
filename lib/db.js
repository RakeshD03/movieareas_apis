const mongoose = require('mongoose');
const dotenv = require('dotenv');

// dotenv to access the .env files in app
dotenv.config();


const connectDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }


}
module.exports=connectDB;