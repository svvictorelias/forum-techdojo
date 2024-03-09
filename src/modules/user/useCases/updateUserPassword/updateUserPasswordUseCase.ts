import { type IUserUpdatePasswordDTO } from '@modules/user/dto/IUserDTO'
import { IUserRepository } from '@modules/user/infra/repositories/IUserRepository'
import { CustomError } from '@shared/error/CustomError'
import { compare, hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'

@injectable()
class UpdateUserPasswordUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  async execute({
    newPassword,
    password,
    id,
  }: IUserUpdatePasswordDTO): Promise<void> {
    const user = await this.userRepository.findById(id)

    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new CustomError('Password not match', 401)
    }
    const hashPassword = await hash(newPassword, 8)

    return await this.userRepository.update({ password: hashPassword, id })
  }
}

export { UpdateUserPasswordUseCase }
