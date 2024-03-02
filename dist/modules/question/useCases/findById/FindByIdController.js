"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindByIdQuestionController = void 0;
var _tsyringe = require("tsyringe");
var _FindByIdUseCase = require("./FindByIdUseCase");
class FindByIdQuestionController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const findByIdQuestionUseCase = _tsyringe.container.resolve(_FindByIdUseCase.FindByIdQuestionUseCase);
    const question = await findByIdQuestionUseCase.execute(id);
    return response.send(question);
  }
}
exports.FindByIdQuestionController = FindByIdQuestionController;