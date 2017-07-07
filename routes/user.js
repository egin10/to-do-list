const express = require('express');

//========== CONTROLLERS
const userController = require('./../controllers/userController');
const todoListController = require('./../controllers/todoListController');
const AuthController = require('./../config/Auth');

const router = express.Router();

const isLogin = AuthController.isLogin;

router.get('/', isLogin, userController.home);
router.get('/about', isLogin, userController.about);
router.get('/setting', isLogin, userController.setting);
router.get('/todolist', isLogin, todoListController.list);
router.get('/addlist', isLogin, todoListController.addList);
router.post('/addlist', isLogin, todoListController.addListPost);
router.get('/editlist/:id', isLogin, todoListController.editList);
router.post('/editlist', isLogin, todoListController.editListPost);
router.get('/delete/:id', isLogin, todoListController.delete);
router.get('/logout', isLogin, AuthController.logout);

module.exports = router
