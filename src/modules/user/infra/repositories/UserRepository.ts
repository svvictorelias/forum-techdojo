import { type IUserDTO } from '@modules/user/dto/IUserDTO'
import { type IUserRepository } from './IUserRepository'
import prisma from '@database/prismaClient'
import { type User } from '../entities/user'

class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({ where: { email } })
    return user as User
  }

  async findById(id: string): Promise<User> {
    const user = await prisma.user.findFirst({ where: { id } })
    return user as User
  }

  async create(data: IUserDTO): Promise<void> {
    await prisma.user.create({ data })
  }
}

export { UserRepository }
