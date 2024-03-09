import { UserRepositoryInMemory } from '@modules/user/infra/repositories/UserRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/createUserUseCase'
import { UpdateUserUseCase } from './updateUserUseCase'

let userRepository: UserRepositoryInMemory
let updateUserUseCase: UpdateUserUseCase
let createUserUseCase: CreateUserUseCase

describe('update User', () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory()
    updateUserUseCase = new UpdateUserUseCase(userRepository)
    createUserUseCase = new CreateUserUseCase(userRepository)
  })
  it('should be able to update a user', async () => {
    await createUserUseCase.execute({
      email: 'testeUn@gg.com',
      name: 'Novo nome',
      password: 'Test123',
    })
    const user = await userRepository.findByEmail('testeUn@gg.com')
    await updateUserUseCase.execute({ id: user.id, email: 'novoEmail@gg.com' })
    const userUpdated = await userRepository.findById(user.id)

    expect(userUpdated.email).toEqual('novoEmail@gg.com')
  })
})
