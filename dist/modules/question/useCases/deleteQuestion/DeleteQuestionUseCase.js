"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteQuestionUseCase = void 0;
var _ILikeRepository = require("../../../like/infra/repositories/ILikeRepository");
var _IQuestionRepository = require("../../infra/repositories/IQuestionRepository");
var _CustomError = require("../../../../shared/error/CustomError");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let DeleteQuestionUseCase = exports.DeleteQuestionUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('LikeRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IQuestionRepository.IQuestionRepository === "undefined" ? Object : _IQuestionRepository.IQuestionRepository, typeof _ILikeRepository.ILikeRepository === "undefined" ? Object : _ILikeRepository.ILikeRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class DeleteQuestionUseCase {
  constructor(questionRepository, likeRepository) {
    this.questionRepository = questionRepository;
    this.likeRepository = likeRepository;
  }
  async execute(id, idUser) {
    const existQuestion = await this.questionRepository.findById(id);
    if (!existQuestion) {
      throw new _CustomError.CustomError('Question not found', 404);
    }
    if (existQuestion.user_id !== idUser) {
      throw new _CustomError.CustomError('Owner not match with question', 401);
    }
    await this.questionRepository.delete(id);
    await this.likeRepository.deleteMany(id);
  }
}) || _class) || _class) || _class) || _class) || _class);