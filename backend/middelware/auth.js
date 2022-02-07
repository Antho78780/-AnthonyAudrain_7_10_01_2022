const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.key);
        const id = decodedToken.id;
        if(req.body.id && req.body.id !== id) {
            throw "Id non valable"
        }
        else {
            next();
        }

    }
    catch(error) {
        res.status(401).json({error : "requéte non authentifié"});
    }
}