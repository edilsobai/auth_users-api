const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");;

const UserSchema = require("../models/user.mongo");
const RoleSchema = require("../models/userRole.mongo");

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
            const userRole = await RoleSchema.findOne({value:"USER"});
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

        }
        catch(e) {
            console.log(e)
            res.status(400).json("Login error")
        }
    }
    
    async getUsers(req, res) {
        try{
            res.json("server works")
        }
        catch(e) {
            console.log(e);
            res.status(400).json("error")
        }
    }
}

module.exports = new authController();