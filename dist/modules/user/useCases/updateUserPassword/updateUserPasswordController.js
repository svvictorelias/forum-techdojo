"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserPasswordController = void 0;
var _tsyringe = require("tsyringe");
var _updateUserPasswordUseCase = require("./updateUserPasswordUseCase");
class UpdateUserPasswordController {
  async handle(request, response) {
    const {
      password,
      newPassword
    } = request.body;
    const {
      id
    } = request.user;
    const updateUserPasswordUseCase = _tsyringe.container.resolve(_updateUserPasswordUseCase.UpdateUserPasswordUseCase);
    await updateUserPasswordUseCase.execute({
      password,
      id,
      newPassword
    });
    return response.status(204).send();
  }
}
exports.UpdateUserPasswordController = UpdateUserPasswordController;