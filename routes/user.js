const express = require('express');

//========== CONTROLLERS
const userController = require('./../controllers/userController');
const todoListController = require('./../controllers/todoListController');
const AuthController = require('./../config/Auth');

const router = express.Router();

const isLogin = AuthController.isLogin;

router.get('/', isLogin, userController.home);
router.get('/about', isLogin, userController.about);
router.get('/logout', isLogin, AuthController.logout);

// ============== SERVICE LIST
router.get('/setting/:user', isLogin, userController.setting);
router.post('/setting', isLogin, userController.settingPost);

// router.get('/todolist', isLogin, todoListController.list);
router.get('/todolist/:user', isLogin, todoListController.list); // tomporary (just for test)

router.get('/addlist', isLogin, todoListController.addList);
router.post('/addlist', isLogin, todoListController.addListPost);

router.get('/editlist/:id', isLogin, todoListController.editList);
// router.post('/editlist/', isLogin, todoListController.editListPost);
router.post('/editlist/:id', isLogin, todoListController.editListPost); // tomporary (just for test)

router.get('/deletelist/:id', isLogin, todoListController.delete);

module.exports = router
