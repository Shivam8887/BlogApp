const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = process.env.DATABASE_URI;
exports.dbConnect = async ()=>{
    try{
        await mongoose.connect(dbURI,{});
        console.log("DB Connection Successful")
    }catch(err){
        console.log("Error in DB Connection ")
        console.error(err);
    }
}