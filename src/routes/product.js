const path = require("path");
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");
const multer = require("multer");

const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        let products = path.join(__dirname, '../../public/images/products')
        cb(null, products)

    },
    filename: function (req, file, callback) {
        let newProductName = 'product-' + Date.now() + path.extname(file.originalname);
        callback(null, newProductName)
    }
})

const upload = multer({ storage })

router.get('/create', productController.create);
router.post('/create',upload.single('productimg'), productController.add);

router.get('/detail/:id', productController.detail);

router.get('/inventory', productController.inventory);
router.delete('/inventory/:id', productController.delete);

router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);


module.exports = router;