"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateQuestionController = void 0;
var _tsyringe = require("tsyringe");
var _CreateQuestionUseCase = require("./CreateQuestionUseCase");
class CreateQuestionController {
  async handle(request, response) {
    const {
      id
    } = request.user;
    const data = request.body;
    data.user_id = id;
    const createQuestionUseCase = _tsyringe.container.resolve(_CreateQuestionUseCase.CreateQuestionUseCase);
    await createQuestionUseCase.execute(data);
    return response.status(201).send();
  }
}
exports.CreateQuestionController = CreateQuestionController;