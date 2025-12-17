import mongoose from "mongoose";
import {DB_NAME } from '../constants.js';


const connectDB = async () => {
  try {
    const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URL_TEST}/${DB_NAME}`);
    console.log(`Database connected successfully !! DB Host : ${connectionIntance.connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
}


export default connectDB;