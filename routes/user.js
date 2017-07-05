const express = require('express');
const Auth = require('./Auth');

//========== CONTROLLERS
const userController = require('./../controllers/userController');
const todoListController = require('./../controllers/todoListController');

const router = express.Router();

const isLogin = Auth.isLogin;

router.get('/', isLogin, userController.home);
router.get('/about', isLogin, userController.about);
router.get('/setting', isLogin, userController.setting);
router.get('/todolist', isLogin, todoListController.list);
router.get('/addlist', isLogin, todoListController.addList);
router.get('/editlist/:id', isLogin, todoListController.editList);

module.exports = router
