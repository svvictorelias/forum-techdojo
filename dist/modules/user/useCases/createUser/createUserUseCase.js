"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;
var _tsyringe = require("tsyringe");
var _bcrypt = require("bcrypt");
var _dec, _dec2, _dec3, _dec4, _class;
let CreateUserUseCase = exports.CreateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof IUserRepository === "undefined" ? Object : IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(data) {
    const hashPassword = await (0, _bcrypt.hash)(data.password, 8);
    await this.userRepository.create({
      ...data,
      password: hashPassword
    });
  }
}) || _class) || _class) || _class) || _class);