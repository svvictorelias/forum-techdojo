"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLikeQuestionUseCase = void 0;
var _ILikeRepository = require("../../infra/repositories/ILikeRepository");
var _IQuestionRepository = require("../../../question/infra/repositories/IQuestionRepository");
var _CustomError = require("../../../../shared/error/CustomError");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let CreateLikeQuestionUseCase = exports.CreateLikeQuestionUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('LikeRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ILikeRepository.ILikeRepository === "undefined" ? Object : _ILikeRepository.ILikeRepository, typeof _IQuestionRepository.IQuestionRepository === "undefined" ? Object : _IQuestionRepository.IQuestionRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateLikeQuestionUseCase {
  constructor(likeRepository, questionRepository) {
    this.likeRepository = likeRepository;
    this.questionRepository = questionRepository;
  }
  async execute(idQuestion, idUser) {
    const existQuestion = await this.questionRepository.findById(idQuestion);
    if (!existQuestion) {
      throw new _CustomError.CustomError('Question not found', 404);
    }
    await this.likeRepository.create(idQuestion, idUser);
  }
}) || _class) || _class) || _class) || _class) || _class);