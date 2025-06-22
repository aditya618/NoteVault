import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import securityRoutes from './routes/securityRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api", securityRoutes);

app.get("/", (req, res) => {
    res.send("Hello");
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});