import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import securityRoutes from './routes/securityRoutes.js';
import cors from 'cors';
import passport from 'passport';
import "./config/passport.js";

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use("/api", securityRoutes);

app.get("/protected", passport.authenticate("jwt", {session: false}), (req, res) => {
    res.send("Hello protected");
})
app.get("/", (req, res) => {
    res.send("Hello");
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});