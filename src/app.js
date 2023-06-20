const express = require("express");
const mongoose = require("mongoose");

//
const authRouter = require("./routes/auth.router");

const PORT = 5000;

const app = express();

app.use("/auth", authRouter)

async function startServer(){
    try {
    await mongoose.connect("mongodb+srv://qwerty:qwerty123@cluster0.yumv8av.mongodb.net/auth_roles?retryWrites=true&w=majority")

    app.listen(PORT, ()=> console.log(`Running on port ${PORT}...`)) 
    } catch (e) {
        console.log(e);
    }
   
}

startServer()