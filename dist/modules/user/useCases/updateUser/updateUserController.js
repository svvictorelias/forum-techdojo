"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserController = void 0;
var _tsyringe = require("tsyringe");
var _updateUserUseCase = require("./updateUserUseCase");
class UpdateUserController {
  async handle(request, response) {
    const {
      email,
      name
    } = request.body;
    const {
      id
    } = request.user;
    const updateUserUseCase = _tsyringe.container.resolve(_updateUserUseCase.UpdateUserUseCase);
    await updateUserUseCase.execute({
      email,
      id,
      name
    });
    return response.status(204).send();
  }
}
exports.UpdateUserController = UpdateUserController;