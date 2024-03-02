"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLikeQuestionController = void 0;
var _tsyringe = require("tsyringe");
var _CreateLikeQuestionUseCase = require("./CreateLikeQuestionUseCase");
class CreateLikeQuestionController {
  async handle(request, response) {
    const {
      id: idUser
    } = request.user;
    const {
      id
    } = request.params;
    const createLikeQuestionUseCase = _tsyringe.container.resolve(_CreateLikeQuestionUseCase.CreateLikeQuestionUseCase);
    await createLikeQuestionUseCase.execute(id, idUser);
    return response.send();
  }
}
exports.CreateLikeQuestionController = CreateLikeQuestionController;