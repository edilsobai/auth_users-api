const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");;
const jwt = require("jsonwebtoken");
require('dotenv').config();


const UserSchema = require("../models/user.mongo");
const RoleSchema = require("../models/userRole.mongo");

const SECRET_KEY = process.env.SECRET_KEY; 

function genarateToken(id, roles) {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, SECRET_KEY, {expiresIn: "3h"})
}


class authController{
    async signup(req, res) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(400).json({
                    message:"Error during registration", 
                    errors: errors.array()
                })
            }
            const { username, password } = req.body;
            const candidate = await UserSchema.findOne({ username })
            if(candidate) {
                return res.status(409).json(`User ${username} already exists`)
            }
            const hashedPassword = await bcrypt.hash(password, 7 );
            const userRole = await RoleSchema.findOne({value:"ADMIN"});
            const newUser = new UserSchema({username, password: hashedPassword, roles: [userRole.value]})
            await newUser.save();
            res.status(201).json("User registered succesfully.")
        }
        catch(e) {
            console.log(e)
            res.status(400).json("Registration error")
        }
    }
     
    async signin(req, res) {
        try{
            const { username, password } = req.body 
            const existsUser = await UserSchema.findOne({username})
            if(!existsUser) {
                return res.status(401).json(`User ${username} does not exist`)           
            }
            const validPassword = await bcrypt.compare(password,existsUser.password)
            if(!validPassword) {
                return res.status(403).json("Incorrect password")
            }
            const token = genarateToken(existsUser._id,existsUser.roles)
            res.status(200).json({token})
        }
        catch(e) {
            console.log(e)
            res.status(400).json("Login error")
        }
    }
    
    async getUsers(req, res) {
        try{
            const users = await UserSchema.find();
            res.json({users})
        }
        catch(e) {
            console.log(e);
            res.status(400).json("error")
        }
    }
}

module.exports = new authController();