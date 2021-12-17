const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers.js');


router.get('/login', usersControllers.login)
router.get('/register', usersControllers.register);
router.post('/register', usersControllers.store);
router.get("/profile", usersControllers.profile);
router.get("/cart", usersControllers.cart)

module.exports = router;