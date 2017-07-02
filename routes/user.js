var express = require('express');
var Auth = require('./Auth');

//========== CONTROLLERS
var userController = require('./../controllers/userController');
var todoListController = require('./../controllers/todoListController');

var router = express.Router();

router.get('/', Auth.isLogin, userController.home);
router.get('/about', Auth.isLogin, userController.about);
router.get('/setting', Auth.isLogin, userController.setting);
router.get('/todolist', Auth.isLogin, todoListController.list);
router.get('/addlist', Auth.isLogin, todoListController.addList);
router.get('/editlist/:id', Auth.isLogin, todoListController.editList);

module.exports = router
