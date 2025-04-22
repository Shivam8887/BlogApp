import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbURI = process.env.DATABASE_URI;
export const dbConnect = async ()=>{
    try{
        await mongoose.connect(dbURI,{});
        console.log("DB Connection Successful")
    }catch(err){
        console.log("Error in DB Connection ")
        console.error(err);
    }
}