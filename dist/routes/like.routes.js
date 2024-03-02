"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.likeRouter = void 0;
var _CreateLikeQuestionController = require("../modules/like/useCases/createLikeQuestion/CreateLikeQuestionController");
var _DeleteLikeQuestionController = require("../modules/like/useCases/deleteLikeQuestion/DeleteLikeQuestionController");
var _isAuth = require("../shared/middleware/isAuth");
var _express = require("express");
const likeRouter = exports.likeRouter = (0, _express.Router)();
const createLikeQuestionController = new _CreateLikeQuestionController.CreateLikeQuestionController();
const deleteLikeQuestionController = new _DeleteLikeQuestionController.DeleteLikeQuestionController();
likeRouter.post('/question/:id', _isAuth.isAuth, createLikeQuestionController.handle);
likeRouter.delete('/:id', _isAuth.isAuth, deleteLikeQuestionController.handle);