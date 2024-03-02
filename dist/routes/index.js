"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _user = require("./user.routes");
var _auth = require("./auth.routes");
var _question = require("./question.routes");
var _like = require("./like.routes");
const router = exports.router = (0, _express.Router)();
router.use('/user', _user.userRouter);
router.use('/auth', _auth.authRouter);
router.use('/question', _question.questionRouter);
router.use('/like', _like.likeRouter);