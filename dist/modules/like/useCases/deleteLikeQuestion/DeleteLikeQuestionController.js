"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteLikeQuestionController = void 0;
var _tsyringe = require("tsyringe");
var _DeleteLikeQuestionUseCase = require("./DeleteLikeQuestionUseCase");
class DeleteLikeQuestionController {
  async handle(request, response) {
    const {
      id: idUser
    } = request.user;
    const {
      id
    } = request.params;
    const deleteLikeQuestionUseCase = _tsyringe.container.resolve(_DeleteLikeQuestionUseCase.DeleteLikeQuestionUseCase);
    await deleteLikeQuestionUseCase.execute(id, idUser);
    return response.status(204).send();
  }
}
exports.DeleteLikeQuestionController = DeleteLikeQuestionController;