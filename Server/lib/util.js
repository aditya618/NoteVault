import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = (password) => {
    return hashSync(password, 10);
}

export const comparePassword = (newPassword, userPassword) => {
    return compareSync(newPassword, userPassword);
}

export const createToken = (user) => {
    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "1d"});
    return "Bearer " + token;
}