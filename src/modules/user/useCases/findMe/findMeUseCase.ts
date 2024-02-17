import { type User } from '@modules/user/infra/entities/user'
import { IUserRepository } from '@modules/user/infra/repositories/IUserRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
class FindMeUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id)
    return user
  }
}

export { FindMeUseCase }
