import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(`MongoDB connection failed! Error: ${error.message}`);
    }
}

export default connectToMongoDB