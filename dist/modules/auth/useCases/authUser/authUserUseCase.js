"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthUserUseCase = void 0;
var _IUserRepository = require("../../../user/infra/repositories/IUserRepository");
var _bcrypt = require("bcrypt");
var _tsyringe = require("tsyringe");
var _jsonwebtoken = require("jsonwebtoken");
var _CustomError = require("../../../../shared/error/CustomError");
var _dec, _dec2, _dec3, _dec4, _class;
let AuthUserUseCase = exports.AuthUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AuthUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(email, password) {
    if (!email || !password) {
      throw new _CustomError.CustomError('Email or password not found', 404);
    }
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new _CustomError.CustomError('User or password not match', 401);
    }
    const passwordMatch = await (0, _bcrypt.compare)(password, user.password);
    if (!passwordMatch) {
      throw new _CustomError.CustomError('User or password not match', 401);
    }
    const encoded = process.env.ENCODED_AUTH;
    const token = (0, _jsonwebtoken.sign)({
      id: user.id,
      email: user.email
    }, encoded, {
      expiresIn: '1h'
    });
    return token;
  }
}) || _class) || _class) || _class) || _class);