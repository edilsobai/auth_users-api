const express = require("express");
const { check } = require("express-validator");

const authController = require("./auth.controller")

const router = express.Router();

router.post(
    "/signup",
    [
        check("username", "The username cannot be empthy").notEmpty(),
        check("password",).isLength({min: 4, max: 12}).withMessage("The password must be more tahn 4 and less than 12 characters"),
    ],
    authController.signup
)

router.post("/signin", authController.signin)

router.get("/users", authController.getUsers)

module.exports = router;