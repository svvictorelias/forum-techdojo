"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuth = isAuth;
var _CustomError = require("../error/CustomError");
var _jsonwebtoken = require("jsonwebtoken");
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function isAuth(request, response, next) {
  const tokenHeader = request.headers.authorization;
  if (!tokenHeader) throw new _CustomError.CustomError('Token not found', 401);
  try {
    const [, token] = tokenHeader.split(' ');
    const {
      id
    } = (0, _jsonwebtoken.verify)(token, process.env.ENCODED_AUTH);
    request.user = {
      id
    };
    return next();
  } catch (error) {
    if (error.message === 'jwt expired') {
      throw new _CustomError.CustomError('token expired', 401);
    } else {
      throw new _CustomError.CustomError('token error', 401);
    }
  }
}