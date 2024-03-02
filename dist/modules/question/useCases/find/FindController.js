"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindQuestionController = void 0;
var _tsyringe = require("tsyringe");
var _FindUseCase = require("./FindUseCase");
class FindQuestionController {
  async handle(request, response) {
    const findQuestionUseCase = _tsyringe.container.resolve(_FindUseCase.FindQuestionUseCase);
    const questions = await findQuestionUseCase.execute();
    return response.send(questions);
  }
}
exports.FindQuestionController = FindQuestionController;