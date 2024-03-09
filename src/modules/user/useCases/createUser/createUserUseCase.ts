import { type IUserDTO } from '@modules/user/dto/IUserDTO'
import { type IUserRepository } from '@modules/user/infra/repositories/IUserRepository'
import { inject, injectable } from 'tsyringe'
import { hash } from 'bcrypt'
import { CustomError } from '@shared/error/CustomError'
@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  async execute(data: IUserDTO): Promise<void> {
    const alreadyExist = await this.userRepository.findByEmail(data.email)
    if (alreadyExist) {
      throw new CustomError('User already Exist with this email', 401)
    }
    const hashPassword = await hash(data.password, 8)
    await this.userRepository.create({ ...data, password: hashPassword })
  }
}

export { CreateUserUseCase }
