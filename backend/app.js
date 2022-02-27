

const express = require("express");

const app = express();
const path = require("path");
const multer = require("multer");

app.use(express.json());

require("dotenv").config();

////Utilisation du CORS/////
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
    
const SequelizeDb = require("./util/database");
const modelsUsers = require("./models/users");
const modelsPost = require("./models/post");

try {
    SequelizeDb.authenticate();
    SequelizeDb.sync();
    console.log("Connexion à la base de donnée réussie");
}
catch(error) {
    console.log("Connexion à la base de donnée echouée")

}
const stockage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./images")
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({storage: stockage});

const routeUsers = require("./routes/users");
const routePost = require("./routes/post");
const routeComments = require("./routes/comments");

app.post("/users/addPhoto/:id", upload.single("imageUser"), (req, res) => {
    modelsUsers.findByPk(req.params.id)
    .then((user) => {
        if(user) 
        console.log(req.file)
        user.update({
            image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
        })
        .then((userUpdate) => {
            res.status(200).json(userUpdate);
        })
    })
})
app.post("/post/postCreate/file", upload.single("imagePost"),(req, res) => {
    const fichePostUser = JSON.parse(req.body.postUser);
    console.log(fichePostUser);
   modelsPost.create({
        userId: fichePostUser.userId,
        titre: fichePostUser.titre,
        sujet: fichePostUser.sujet,
        image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
   })
   .then((post) => {
       res.status(200).json(post);
   })
})

app.use("/users/", routeUsers);
app.use("/post/", routePost);
app.use("/comments/", routeComments);
app.use("/images/", express.static(path.join(__dirname, "/images/")))

module.exports = app;

