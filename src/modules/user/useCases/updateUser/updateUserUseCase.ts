import { type IUserUpdateDTO } from '@modules/user/dto/IUserDTO'
import { IUserRepository } from '@modules/user/infra/repositories/IUserRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  async execute({ email, name, id }: IUserUpdateDTO): Promise<void> {
    return await this.userRepository.update({ email, name, id })
  }
}

export { UpdateUserUseCase }
