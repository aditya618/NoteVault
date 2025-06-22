import express from 'express';
import User from '../model/User.js';
import { comparePassword, createToken, hashPassword } from '../lib/util.js';

const router = express.Router();

router.post('/login', (req,res) => {
    const {email, password} = req.body;
    User.findOne({email}).then(user => {
        if(!user) {
            return res.status(401).send("User Not Found");
        }
        if(!comparePassword(password, user.password)) {
            return res.status(401).send("Invalid Credentials");
        }
        const userObj = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        };
        const token = createToken(userObj);
        res.status(200).json(token);
    }).catch(() => {
        res.status(500).json({err: "Some error occurred"});
    })
});

router.post('/register', (req,res) => {
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
    newUser.save().then((user) => {
        const userObj = {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        };
        res.status(201).json({msg: 'User created', user: userObj});
    }).catch(() => {
        res.status(500).json({msg: 'Error creating user. please try again later'});
    });    
});

export default router;