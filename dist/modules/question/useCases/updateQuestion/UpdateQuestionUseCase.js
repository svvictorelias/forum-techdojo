"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateQuestionUseCase = void 0;
var _IQuestionRepository = require("../../infra/repositories/IQuestionRepository");
var _CustomError = require("../../../../shared/error/CustomError");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let UpdateQuestionUseCase = exports.UpdateQuestionUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IQuestionRepository.IQuestionRepository === "undefined" ? Object : _IQuestionRepository.IQuestionRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateQuestionUseCase {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }
  async execute({
    idUser,
    idQuestion,
    data
  }) {
    const existQuestion = await this.questionRepository.findById(idQuestion);
    if (!existQuestion) {
      throw new _CustomError.CustomError('Question not found', 404);
    }
    if (existQuestion.user_id !== idUser) {
      throw new _CustomError.CustomError('Owner not match with question', 401);
    }
    await this.questionRepository.update(idQuestion, data);
  }
}) || _class) || _class) || _class) || _class);