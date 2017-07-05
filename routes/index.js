const express = require('express');

//========== CONTROLLERS
const mainController = require('./../controllers/mainController');
const AuthController = require('./../controllers/Auth');

const router = express.Router();

router.get('/', mainController.index);
router.get('/login', AuthController.login);

module.exports = router
