import { type IUserUpdateDTO, type IUserDTO } from '@modules/user/dto/IUserDTO'
import { type IUserRepository } from './IUserRepository'
import { User } from '../entities/user'

class UserRepositoryInMemory implements IUserRepository {
  users: User[] = []

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email)!
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id)!
  }

  async update({ email, id, name, password }: IUserUpdateDTO): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id)

    if (userIndex !== -1) {
      if (name) this.users[userIndex].name = name
      if (email) this.users[userIndex].email = email
      if (password) this.users[userIndex].password = password
    }
  }

  async create(data: IUserDTO): Promise<void> {
    const user = new User()
    Object.assign(user, data)
    this.users.push(user)
  }
}

export { UserRepositoryInMemory }
