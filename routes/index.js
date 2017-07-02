var express = require('express');

//========== CONTROLLERS
var mainController = require('./../controllers/mainController');
var AuthController = require('./../controllers/Auth');

var router = express.Router();

router.get('/', mainController.index);
router.get('/login', AuthController.login);

module.exports = router
