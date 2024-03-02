"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionRouter = void 0;
var _CreateQuestionController = require("../modules/question/useCases/createQuestion/CreateQuestionController");
var _DeleteQuestionController = require("../modules/question/useCases/deleteQuestion/DeleteQuestionController");
var _FindController = require("../modules/question/useCases/find/FindController");
var _FindByIdController = require("../modules/question/useCases/findById/FindByIdController");
var _FindByUserController = require("../modules/question/useCases/findByUser/FindByUserController");
var _UpdateQuestionController = require("../modules/question/useCases/updateQuestion/UpdateQuestionController");
var _isAuth = require("../shared/middleware/isAuth");
var _express = require("express");
const questionRouter = exports.questionRouter = (0, _express.Router)();
const createQUestionCOntroller = new _CreateQuestionController.CreateQuestionController();
const updateQUestionController = new _UpdateQuestionController.UpdateQuestionController();
const findByIdQuestionController = new _FindByIdController.FindByIdQuestionController();
const findByUserQuestionController = new _FindByUserController.FindByUserQuestionController();
const findQuestionController = new _FindController.FindQuestionController();
const deleteQuestionController = new _DeleteQuestionController.DeleteQuestionController();
questionRouter.post('/', _isAuth.isAuth, createQUestionCOntroller.handle);
questionRouter.put('/:id', _isAuth.isAuth, updateQUestionController.handle);
questionRouter.delete('/:id', _isAuth.isAuth, deleteQuestionController.handle);
questionRouter.get('/user', _isAuth.isAuth, findByUserQuestionController.handle);
questionRouter.get('/all', _isAuth.isAuth, findQuestionController.handle);
questionRouter.get('/:id', _isAuth.isAuth, findByIdQuestionController.handle);