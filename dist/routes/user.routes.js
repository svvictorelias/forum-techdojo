"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;
var _createUserController = require("../modules/user/useCases/createUser/createUserController");
var _findMeController = require("../modules/user/useCases/findMe/findMeController");
var _updateUserController = require("../modules/user/useCases/updateUser/updateUserController");
var _updateUserPasswordController = require("../modules/user/useCases/updateUserPassword/updateUserPasswordController");
var _isAuth = require("../shared/middleware/isAuth");
var _express = require("express");
const userRouter = exports.userRouter = (0, _express.Router)();
const createUserController = new _createUserController.CreateUserController();
const findMeController = new _findMeController.FindMeController();
const updateUserController = new _updateUserController.UpdateUserController();
const updateUserPasswordController = new _updateUserPasswordController.UpdateUserPasswordController();
userRouter.get('/me', _isAuth.isAuth, findMeController.handle);
userRouter.post('/', createUserController.handle);
userRouter.put('/me', _isAuth.isAuth, updateUserController.handle);
userRouter.patch('/me/password', _isAuth.isAuth, updateUserPasswordController.handle);