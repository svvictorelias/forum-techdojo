import { IUserRepository } from '@modules/user/infra/repositories/IUserRepository'
import { compare } from 'bcrypt'
import { inject, injectable } from 'tsyringe'
import { sign } from 'jsonwebtoken'
import { CustomError } from '@shared/error/CustomError'

@injectable()
class AuthUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  async execute(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new CustomError('Email or password not found', 404)
    }
    const user = await this.userRepository.findByEmail(email)
    if (!user) {
      throw new CustomError('User or password not match', 401)
    }
    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) {
      throw new CustomError('User or password not match', 401)
    }
    const encoded = process.env.ENCODED_AUTH!
    const token = sign({ id: user.id, email: user.email }, encoded, {
      expiresIn: '1h',
    })
    return token
  }
}

export { AuthUserUseCase }
