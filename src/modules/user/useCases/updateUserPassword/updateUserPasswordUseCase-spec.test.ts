import { UserRepositoryInMemory } from '@modules/user/infra/repositories/UserRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/createUserUseCase'
import { UpdateUserPasswordUseCase } from './updateUserPasswordUseCase'
import { CustomError } from '@shared/error/CustomError'

let userRepository: UserRepositoryInMemory
let updateUserPasswordUseCase: UpdateUserPasswordUseCase
let createUserUseCase: CreateUserUseCase

describe('update password User', () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory()
    updateUserPasswordUseCase = new UpdateUserPasswordUseCase(userRepository)
    createUserUseCase = new CreateUserUseCase(userRepository)
  })
  it('should be able to update password of a user', async () => {
    await createUserUseCase.execute({
      email: 'testeUn@gg.com',
      name: 'Novo nome',
      password: 'Test123',
    })
    const user = await userRepository.findByEmail('testeUn@gg.com')
    await updateUserPasswordUseCase.execute({
      id: user.id,
      newPassword: '12345',
      password: 'Test123',
    })

    await expect(
      updateUserPasswordUseCase.execute({
        id: user.id,
        newPassword: '1234',
        password: 'Test123',
      })
    ).rejects.toEqual(new CustomError('Password not match'))
  })
  it('should not be able to update password of a user', async () => {
    await createUserUseCase.execute({
      email: 'testeUn@gg.com',
      name: 'Novo nome',
      password: 'Test123',
    })
    const user = await userRepository.findByEmail('testeUn@gg.com')

    await expect(
      updateUserPasswordUseCase.execute({
        id: user.id,
        newPassword: '1234',
        password: 'Test123x',
      })
    ).rejects.toEqual(new CustomError('Password not match'))
  })
})
