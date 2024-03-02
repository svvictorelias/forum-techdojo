"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUserPasswordUseCase = void 0;
var _IUserRepository = require("../../infra/repositories/IUserRepository");
var _CustomError = require("../../../../shared/error/CustomError");
var _bcrypt = require("bcrypt");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let UpdateUserPasswordUseCase = exports.UpdateUserPasswordUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateUserPasswordUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute({
    newPassword,
    password,
    id
  }) {
    const user = await this.userRepository.findById(id);
    const passwordMatch = await (0, _bcrypt.compare)(password, user.password);
    if (!passwordMatch) {
      throw new _CustomError.CustomError('Password not match', 401);
    }
    const hashPassword = await (0, _bcrypt.hash)(newPassword, 8);
    return await this.userRepository.update({
      password: hashPassword,
      id
    });
  }
}) || _class) || _class) || _class) || _class);