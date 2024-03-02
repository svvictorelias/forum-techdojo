"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;
var _tsyringe = require("tsyringe");
var _createUserUseCase = require("./createUserUseCase");
class CreateUserController {
  async handle(request, response) {
    const data = request.body;
    const createUserUseCase = _tsyringe.container.resolve(_createUserUseCase.CreateUserUseCase);
    await createUserUseCase.execute(data);
    return response.status(201).send();
  }
}
exports.CreateUserController = CreateUserController;