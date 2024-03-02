import { type IUserUpdateDTO, type IUserDTO } from '@modules/user/dto/IUserDTO'
import { type User } from '../entities/user'

interface IUserRepository {
  create(data: IUserDTO): Promise<void>
  update({ email, name, id, password }: IUserUpdateDTO): Promise<void>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
}

export type { IUserRepository }
