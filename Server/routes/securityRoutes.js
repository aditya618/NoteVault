import express from 'express';
import User from '../model/User.js';
import { hashSync } from 'bcrypt';

const router = express.Router();

router.post('/login', (req,res) => {
    // Logic for user login
    res.send('Login endpoint');
});

const hashPassword = (password) => {
    return hashSync(password, 10);
}

router.post('/register', (req,res) => {
    // Logic for user registration
    const {firstName, lastName, email, password} = req.body;
    if(!email && email === '') {
        return res.status(400).json({err: 'email is required'});
    }
    if(!password && password === '') {
        return res.status(400).json({err: 'password is required'});
    }
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashPassword(password)
    });
    newUser.save().then(() => {
        res.status(201).json({msg: 'User created'});
    }).catch(() => {
        res.status(500).json({msg: 'Error creating user. please try again later'});
    });    
});

export default router;