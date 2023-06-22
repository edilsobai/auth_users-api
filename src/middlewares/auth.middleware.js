const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

function authMiddleware( req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token) {
            return res.status(401).json("User is not authorized")
        }
        const decodedData = jwt.verify(token, SECRET_KEY)
        req.user = decodedData; 
        next();
    } catch (e) {
        return res.status(401).json("User is not authorized")
        
    }
}

module.exports = authMiddleware;