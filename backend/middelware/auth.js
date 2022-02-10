const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const decodedToken = jwt.verify(token, `${process.env.key}`);
        const userId = decodedToken.id;
        console.log(userId);      
    }
    catch(error) {
        res.status(401).json({error : "requéte non authentifié"});
    }
}