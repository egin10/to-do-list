const express = require('express');

//========== CONTROLLERS
const mainController = require('./../controllers/mainController');
const AuthController = require('./../config/Auth');

const router = express.Router();

router.get('/', mainController.index);
router.get('/login', AuthController.login);
router.post('/login', AuthController.loginPost);
router.get('/register', mainController.register);
router.post('/register', mainController.registerPost);

module.exports = router
