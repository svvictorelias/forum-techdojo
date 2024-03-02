"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindQuestionUseCase = void 0;
var _IQuestionRepository = require("../../infra/repositories/IQuestionRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let FindQuestionUseCase = exports.FindQuestionUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IQuestionRepository.IQuestionRepository === "undefined" ? Object : _IQuestionRepository.IQuestionRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class FindQuestionUseCase {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }
  async execute() {
    const questions = await this.questionRepository.find();
    return questions;
  }
}) || _class) || _class) || _class) || _class);