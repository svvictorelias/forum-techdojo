"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteQuestionController = void 0;
var _tsyringe = require("tsyringe");
var _DeleteQuestionUseCase = require("./DeleteQuestionUseCase");
class DeleteQuestionController {
  async handle(request, response) {
    const {
      id: idUser
    } = request.user;
    const {
      id
    } = request.params;
    const data = request.body;
    data.user_id = idUser;
    const deleteQuestionUseCase = _tsyringe.container.resolve(_DeleteQuestionUseCase.DeleteQuestionUseCase);
    await deleteQuestionUseCase.execute(id, idUser);
    return response.status(204).send();
  }
}
exports.DeleteQuestionController = DeleteQuestionController;