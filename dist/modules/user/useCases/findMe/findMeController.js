"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindMeController = void 0;
var _tsyringe = require("tsyringe");
var _findMeUseCase = require("./findMeUseCase");
class FindMeController {
  async handle(request, response) {
    const {
      id
    } = request.user;
    const findMeUseCase = _tsyringe.container.resolve(_findMeUseCase.FindMeUseCase);
    const me = await findMeUseCase.execute(id);
    return response.send(me);
  }
}
exports.FindMeController = FindMeController;