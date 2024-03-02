"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthUserContoller = void 0;
var _tsyringe = require("tsyringe");
var _authUserUseCase = require("./authUserUseCase");
class AuthUserContoller {
  async handle(request, response) {
    const {
      email,
      password
    } = request.body;
    const authUserUseCase = _tsyringe.container.resolve(_authUserUseCase.AuthUserUseCase);
    const auth = await authUserUseCase.execute(email, password);
    return response.send(auth);
  }
}
exports.AuthUserContoller = AuthUserContoller;