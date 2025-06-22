import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.nq1j3tm.mongodb.net/notevault?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDB = () => {
    try {
        mongoose.connect(mongoUrl).then(() => {
            console.log("mongo conected");
        }).catch((err) => console.error(err));
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
