"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateQuestionController = void 0;
var _tsyringe = require("tsyringe");
var _UpdateQuestionUseCase = require("./UpdateQuestionUseCase");
class UpdateQuestionController {
  async handle(request, response) {
    const {
      id: idUser
    } = request.user;
    const {
      id
    } = request.params;
    const data = request.body;
    data.user_id = idUser;
    const updateQuestionUseCase = _tsyringe.container.resolve(_UpdateQuestionUseCase.UpdateQuestionUseCase);
    await updateQuestionUseCase.execute({
      idQuestion: id,
      idUser,
      data
    });
    return response.status(204).send();
  }
}
exports.UpdateQuestionController = UpdateQuestionController;