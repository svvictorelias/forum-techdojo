"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindByUserQuestionController = void 0;
var _tsyringe = require("tsyringe");
var _FindByUserUseCase = require("./FindByUserUseCase");
class FindByUserQuestionController {
  async handle(request, response) {
    const {
      id
    } = request.user;
    const findByUserQuestionUseCase = _tsyringe.container.resolve(_FindByUserUseCase.FindByUserQuestionUseCase);
    const questions = await findByUserQuestionUseCase.execute(id);
    return response.send(questions);
  }
}
exports.FindByUserQuestionController = FindByUserQuestionController;