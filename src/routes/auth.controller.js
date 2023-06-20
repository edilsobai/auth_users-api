const User = require("../models/user.mongo");
const Role = require("../models/userRole.mongo");

class authController{
    async register(req, res) {
        try{

        }
        catch(e) {

        }
    }
     
    async login(req, res) {
        try{

        }
        catch(e) {

        }
    }
    
    async getUsers(req, res) {
        try{
            const userRole = new Role();
            const adminRole = new Role("ADMIN");
            await userRole.save();
            await adminRole.save();
            res.json("server works")
        }
        catch(e) {
            console.log(e);
            res.status(400).json("error")
        }
    }
}

module.exports = new authController();