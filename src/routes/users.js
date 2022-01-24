const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const usersControllers = require('../controllers/usersControllers.js');


const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        let products = path.join(__dirname, '../../public/images/users')
        cb(null, products)

    },
    filename: function (req, file, callback) {
        let newProductName = 'avatar-' + Date.now() + path.extname(file.originalname);
        callback(null, newProductName)
    }
})

const upload = multer({ storage })

router.get('/login', usersControllers.login);
router.post('/login', usersControllers.loginProcess);
router.get('/register', usersControllers.register);
router.post('/register', upload.single('avatar'), usersControllers.store);
router.get("/profile", usersControllers.profile);



module.exports = router;