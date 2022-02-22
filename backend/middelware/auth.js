const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, `${process.env.key}`);
        const userId = decodedToken.id;
       if(req.body.userId && req.body.userId == userId) {
           next();
       }
       else{
           throw "UserId non valide"
       }
    }
    catch(error) {
        res.status(401).json({error : "requéte non authentifié"});
    }
}