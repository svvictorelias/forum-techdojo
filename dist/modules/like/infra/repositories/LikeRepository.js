"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LikeRepository = void 0;
var _prismaClient = _interopRequireDefault(require("../../../../database/prismaClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class LikeRepository {
  async findById(id) {
    return await _prismaClient.default.like.findUnique({
      where: {
        id
      }
    });
  }
  async create(idQuestion, idUser) {
    await _prismaClient.default.like.create({
      data: {
        id_question: idQuestion,
        id_user: idUser
      }
    });
  }
  async delete(id) {
    await _prismaClient.default.like.delete({
      where: {
        id
      }
    });
  }
  async deleteMany(idQuestion) {
    await _prismaClient.default.like.deleteMany({
      where: {
        id_question: idQuestion
      }
    });
  }
}
exports.LikeRepository = LikeRepository;