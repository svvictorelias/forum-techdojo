"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRouter = void 0;
var _authUserController = require("../modules/auth/useCases/authUser/authUserController");
var _express = require("express");
const authRouter = exports.authRouter = (0, _express.Router)();
const authUserController = new _authUserController.AuthUserContoller();
authRouter.post('/', authUserController.handle);