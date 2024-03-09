"use strict";

var _createUserUseCase = require("./createUserUseCase");
var _UserRepositoryInMemory = require("../../infra/repositories/UserRepositoryInMemory");
let createUserUseCase;
let userRepository;
describe('Create user', () => {
  beforeEach(() => {
    userRepository = new _UserRepositoryInMemory.UserRepositoryInMemory();
    createUserUseCase = new _createUserUseCase.CreateUserUseCase(userRepository);
  });
  it('shoud be able to create a user', async () => {
    await createUserUseCase.execute({
      email: 'testeUn@gg.com',
      name: 'Teste teste',
      password: 'Test123'
    });
    const existUser = await userRepository.findByEmail('testeUn@gg.com');
    expect(existUser).toBeTruthy();
    expect(existUser.name).toEqual('Teste teste');
  });
});