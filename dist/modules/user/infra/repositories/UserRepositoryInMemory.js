"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepositoryInMemory = void 0;
var _user = require("../entities/user");
class UserRepositoryInMemory {
  constructor() {
    this.users = [];
  }
  async findByEmail(email) {
    return this.users.find(user => user.email === email);
  }
  async findById(id) {
    return this.users.find(user => user.id === id);
  }
  async update({
    email,
    id,
    name,
    password
  }) {}
  async create(data) {
    const user = new _user.User();
    Object.assign(user, data);
    this.users.push(user);
  }
}
exports.UserRepositoryInMemory = UserRepositoryInMemory;