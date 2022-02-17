const multer = require("multer");

const MYME_TYPES = {
    "image/jpg" : "jpg",
    "image/jpeg" : "jpg",
    "image.gif" : "gif",
    "image.png" : "png"
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cd(null, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.split(" ").join("_");
        const extension = Mime_TYPE[file.mimetype];
        cb(null, name + "_" + Date.now() + extension);
    }
})


module.exports = multer({storage}).single("image");