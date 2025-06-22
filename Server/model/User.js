import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const User = mongoose.model("User", userSchema);

export default User;