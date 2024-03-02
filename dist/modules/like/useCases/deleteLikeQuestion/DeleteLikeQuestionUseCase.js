"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteLikeQuestionUseCase = void 0;
var _ILikeRepository = require("../../infra/repositories/ILikeRepository");
var _CustomError = require("../../../../shared/error/CustomError");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let DeleteLikeQuestionUseCase = exports.DeleteLikeQuestionUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('LikeRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ILikeRepository.ILikeRepository === "undefined" ? Object : _ILikeRepository.ILikeRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteLikeQuestionUseCase {
  constructor(likeRepository) {
    this.likeRepository = likeRepository;
  }
  async execute(id, idUser) {
    const existLike = await this.likeRepository.findById(id);
    if (!existLike) {
      throw new _CustomError.CustomError('Like question not found', 404);
    }
    if (idUser !== existLike.id_user) {
      throw new _CustomError.CustomError('Like question not match with user', 401);
    }
    await this.likeRepository.delete(id);
  }
}) || _class) || _class) || _class) || _class);