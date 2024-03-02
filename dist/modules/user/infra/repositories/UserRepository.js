"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;
var _prismaClient = _interopRequireDefault(require("../../../../database/prismaClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserRepository {
  async findByEmail(email) {
    const user = await _prismaClient.default.user.findFirst({
      where: {
        email
      }
    });
    return user;
  }
  async findById(id) {
    const user = await _prismaClient.default.user.findFirst({
      where: {
        id
      }
    });
    return user;
  }
  async update({
    email,
    id,
    name,
    password
  }) {
    await _prismaClient.default.user.update({
      where: {
        id
      },
      data: {
        email,
        name,
        password
      }
    });
  }
  async create(data) {
    await _prismaClient.default.user.create({
      data
    });
  }
}
exports.UserRepository = UserRepository;