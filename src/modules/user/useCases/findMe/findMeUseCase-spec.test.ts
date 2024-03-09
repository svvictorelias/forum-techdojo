import { UserRepositoryInMemory } from '@modules/user/infra/repositories/UserRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/createUserUseCase'

let createUserUseCase: CreateUserUseCase
let userRepository: UserRepositoryInMemory

describe('find me', () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(userRepository)
  })
  it('shoud be able to find a user', async () => {
    await createUserUseCase.execute({
      email: 'testeUn@gg.com',
      name: 'Novo nome',
      password: 'Test123',
    })
    const recoverUser = await userRepository.findByEmail('testeUn@gg.com')

    const existUser = await userRepository.findById(recoverUser.id)

    expect(existUser).toBeTruthy()
    expect(existUser.name).toEqual('Novo nome')
  })
})
