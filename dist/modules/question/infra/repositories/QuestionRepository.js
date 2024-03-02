"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionRepository = void 0;
var _prismaClient = _interopRequireDefault(require("../../../../database/prismaClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class QuestionRepository {
  async create(data) {
    await _prismaClient.default.question.create({
      data
    });
  }
  async find() {
    const questions = await _prismaClient.default.question.findMany({
      where: {
        deleted_at: null
      }
    });
    return questions;
  }
  async findById(id) {
    const question = await _prismaClient.default.question.findUnique({
      where: {
        id,
        deleted_at: null
      }
    });
    return question;
  }
  async findByUser(userId) {
    const questions = await _prismaClient.default.question.findMany({
      where: {
        user_id: userId,
        deleted_at: null
      }
    });
    return questions;
  }
  async update(id, data) {
    await _prismaClient.default.question.update({
      where: {
        id
      },
      data
    });
  }
  async delete(id) {
    await _prismaClient.default.question.update({
      where: {
        id
      },
      data: {
        deleted_at: new Date()
      }
    });
  }
}
exports.QuestionRepository = QuestionRepository;