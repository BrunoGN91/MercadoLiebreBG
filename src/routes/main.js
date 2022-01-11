const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js')

router.get('/', mainControllers.index);
router.get('/cart', mainControllers.cart);
router.get("/api/productos", mainControllers.productos)


module.exports = router;