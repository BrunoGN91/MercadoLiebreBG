const path = require("path");
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

router.get('/create', productController.create);

module.exports = router;