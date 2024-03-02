"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomError = void 0;
class CustomError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = void 0;
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}
exports.CustomError = CustomError;