import { CustomError } from '@shared/error/CustomError'
import { CreateUserUseCase } from './createUserUseCase'
import { UserRepositoryInMemory } from '@modules/user/infra/repositories/UserRepositoryInMemory'

let createUserUseCase: CreateUserUseCase
let userRepository: UserRepositoryInMemory

describe('Create user', () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(userRepository)
  })

  it('shoud be able to create a user', async () => {
    await createUserUseCase.execute({
      email: 'testeUn@gg.com',
      name: 'Teste teste',
      password: 'Test123',
    })
    const existUser = await userRepository.findByEmail('testeUn@gg.com')

    expect(existUser).toBeTruthy()
    expect(existUser.name).toEqual('Teste teste')
  })
  it('shoud not be able to create a user with already exist email', async () => {
    await createUserUseCase.execute({
      email: 'testeUn@gg.com',
      name: 'Teste teste',
      password: 'Test123',
    })

    await expect(
      createUserUseCase.execute({
        email: 'testeUn@gg.com',
        name: 'Teste teste',
        password: 'Test123',
      })
    ).rejects.toEqual(new CustomError('User already Exist with this email'))
  })
})
